async def get_forms_async(session, url):
    forms_found = []
    try:
        content = await fetch(session, url)
        soup = BeautifulSoup(content, 'html.parser')
        forms = soup.find_all('form')
        for form in forms:
            form_id = form.get('id')
            if form.get('id') is None or form.get('id') == "":
                classes = form.get('class')
                if classes and "fc-form" in classes:
                    form_id = [c for c in classes if c.startswith("fc-form-")][0]

            # If form_id is still None, and data-form-id is present, use it as form_id
            if (form_id is None or form_id == "") and form.get('data-form-id'):
                form_id = form.get('data-form-id')

            # If form_id is still None, use the path of the URL as form_id (without the query string)
            if form_id is None or form_id == "":
                form_id = url.split("?")[0].split("/")[-1]

            form_details = {
                "action": form.get('action'),
                "method": form.get('method'),
                "id": form_id,
                "name": form.get('name'),
                "data_attributes": {attr: form.get(attr) for attr in form.attrs if attr.startswith('data-')},
                "inputs": []
            }

            inputs = form.find_all(['input', 'select', 'textarea'])
            for input_tag in inputs:
                input_type = input_tag.name
                input_details = {
                    "name": input_tag.get('name'),
                    "type": input_tag.get('type') if input_type == 'input' else input_type,
                    "id": input_tag.get('id'),
                    "value": input_tag.get('value'),
                    "label": None
                }

                # Find associated label - Updated for Material-UI
                input_id = input_tag.get('id')
                if input_id:
                    # Try to find label by 'for' attribute
                    label = form.find('label', {'for': input_id})
                    if not label:
                        # Try to find label by id with '-label' suffix
                        label = form.find('label', {'id': f"{input_id}-label"})
                    if not label:
                        # Try to find label within the same MuiFormControl-root div
                        parent_div = input_tag.find_parent('div', class_='MuiFormControl-root')
                        if parent_div:
                            label = parent_div.find('label')

                if label:
                    input_details["label"] = label.get_text().strip()

                if input_type == 'select':
                    options = input_tag.find_all('option')
                    input_details["options"] = [{"value": option.get("value"), "text": option.get_text()} for option in options]

                # Exclude inputs in the inputs_to_exclude list
                if input_details["name"] not in inputs_to_exclude:
                    form_details["inputs"].append(input_details)

            # Check if it's a search form
            is_search_form = (
                form_details["name"] in search_form_names or 
                any(input_details["name"] in search_form_names for input_details in form_details["inputs"]) or
                form.get("role") == "search" or 
                form.get("aria-label") == "Search"
            )

            # Only exclude if it's explicitly a search form
            if not is_search_form:
                forms_found.append(form_details)

    except Exception as e:
        print(f"Error analyzing {url}: {e}")
    return forms_found 