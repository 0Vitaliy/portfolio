async def get_forms_async(session, url):
    forms_found = []
    try:
        content = await fetch(session, url)
        soup = BeautifulSoup(content, 'html.parser')
        
        # Print the entire HTML content for debugging
        print(f"Full HTML content of {url}:")
        print(content[:1000])  # Print first 1000 chars
        
        # First try to find forms with data-track-form attribute
        forms = soup.find_all('form', attrs={'data-track-form': 'true'})
        print(f"Found {len(forms)} forms with data-track-form attribute")
        
        # If no forms with data-track-form, look for all forms
        if not forms:
            forms = soup.find_all('form')
            print(f"Found {len(forms)} forms without data-track-form attribute")
        
        # If still no forms, look for forms in any container
        if not forms:
            print("No forms found directly, looking for forms in any container...")
            # Try to find forms in any div
            all_divs = soup.find_all('div')
            print(f"Found {len(all_divs)} divs")
            for div in all_divs:
                form = div.find('form')
                if form:
                    forms.append(form)
                    print(f"Found form inside div: {form.get('name', 'unnamed')}")
        
        print(f"Total forms found: {len(forms)}")
        
        for form in forms:
            print(f"\nProcessing form: {form.get('name', 'unnamed')}")
            print(f"Form HTML: {form.prettify()[:500]}...")  # Print first 500 chars of form HTML
            
            form_id = form.get('id')
            print(f"Form ID: {form_id}")
            
            if form.get('id') is None or form.get('id') == "":
                classes = form.get('class')
                print(f"Form classes: {classes}")
                if classes and "fc-form" in classes:
                    form_id = [c for c in classes if c.startswith("fc-form-")][0]
                    print(f"Using fc-form class as ID: {form_id}")

            if (form_id is None or form_id == "") and form.get('data-form-id'):
                form_id = form.get('data-form-id')
                print(f"Using data-form-id as ID: {form_id}")

            if form_id is None or form_id == "":
                form_id = url.split("?")[0].split("/")[-1]
                print(f"Using URL path as ID: {form_id}")

            form_details = {
                "action": form.get('action'),
                "method": form.get('method'),
                "id": form_id,
                "name": form.get('name'),
                "data_attributes": {attr: form.get(attr) for attr in form.attrs if attr.startswith('data-')},
                "inputs": []
            }
            print(f"Form details: {form_details}")

            # Look for inputs in the form and in parent elements
            inputs = form.find_all(['input', 'select', 'textarea'])
            print(f"Found {len(inputs)} inputs directly in form")
            
            if not inputs:
                print("No inputs found directly in form, looking in parent elements...")
                parent = form.parent
                while parent and parent.name != 'body':
                    inputs = parent.find_all(['input', 'select', 'textarea'])
                    if inputs:
                        print(f"Found {len(inputs)} inputs in parent element: {parent.name}")
                        break
                    parent = parent.parent
            
            print(f"Total inputs found: {len(inputs)}")
            
            for input_tag in inputs:
                print(f"Processing input: {input_tag.get('name', 'unnamed')} of type {input_tag.get('type', input_tag.name)}")
                input_type = input_tag.name
                input_details = {
                    "name": input_tag.get('name'),
                    "type": input_tag.get('type') if input_type == 'input' else input_type,
                    "id": input_tag.get('id'),
                    "value": input_tag.get('value'),
                    "label": None
                }
                print(f"Input details: {input_details}")

                # Find associated label
                label = input_tag.find_previous_sibling('label')
                if not label:
                    # Get the label based on the for attribute
                    label = form.find('label', {'for': input_tag.get('id')})
                    print(f"Found label by for attribute: {label}")

                if label:
                    input_details["label"] = label.get_text().strip()
                    print(f"Label text: {input_details['label']}")

                if input_type == 'select':
                    options = input_tag.find_all('option')
                    input_details["options"] = [{"value": option.get("value"), "text": option.get_text()} for option in options]
                    print(f"Select options: {input_details['options']}")

                # Exclude inputs in the inputs_to_exclude list
                if input_details["name"] not in inputs_to_exclude:
                    form_details["inputs"].append(input_details)
                    print(f"Added input to form: {input_details}")
                else:
                    print(f"Excluded input: {input_details['name']}")

            is_search_form = form_details["name"] in search_form_names or any(
                input_details["name"] in search_form_names for input_details in form_details["inputs"])
            print(f"Is search form: {is_search_form}")

            # Exclude search forms that have role="search" or aria-label="Search"
            is_search_form = form.get("role") == "search" or form.get("aria-label") == "Search"
            print(f"Is search form (by role/aria): {is_search_form}")

            empty_form = len(form_details["inputs"]) == 0
            print(f"Is empty form: {empty_form}")

            if not is_search_form and not empty_form:
                forms_found.append(form_details)
                print(f"Added form to results: {form_details}")
            else:
                print(f"Form excluded: search={is_search_form}, empty={empty_form}")
    except Exception as e:
        print(f"Error analyzing {url}: {e}")
        import traceback
        print(traceback.format_exc())
    return forms_found 