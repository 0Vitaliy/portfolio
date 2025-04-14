async def get_forms_async(session, url):
    forms_found = []
    try:
        content = await fetch(session, url)
        soup = BeautifulSoup(content, 'html.parser')
        
        # First try to find forms directly
        forms = soup.find_all('form')
        print(f"Direct form search found {len(forms)} forms")
        
        # If no forms found, look for Elementor form widgets
        if not forms:
            print("No forms found directly, looking for Elementor form widgets...")
            elementor_forms = soup.find_all('div', class_='elementor-widget-form')
            print(f"Found {len(elementor_forms)} Elementor form widgets")
            for elementor_form in elementor_forms:
                form = elementor_form.find('form')
                if form:
                    forms.append(form)
                    print(f"Found form inside Elementor widget: {form.get('name', 'unnamed')}")
        
        # If still no forms, look for any elementor-form class
        if not forms:
            print("No forms found in widgets, looking for elementor-form class...")
            elementor_form_divs = soup.find_all('div', class_='elementor-form')
            print(f"Found {len(elementor_form_divs)} divs with elementor-form class")
            for div in elementor_form_divs:
                form = div.find('form')
                if form:
                    forms.append(form)
                    print(f"Found form inside elementor-form div: {form.get('name', 'unnamed')}")
        
        # If still no forms, look for any form with elementor-form class
        if not forms:
            print("No forms found in divs, looking for forms with elementor-form class...")
            elementor_forms = soup.find_all('form', class_='elementor-form')
            print(f"Found {len(elementor_forms)} forms with elementor-form class")
            forms.extend(elementor_forms)
        
        print(f"Total forms found: {len(forms)}")
        
        for form in forms:
            print(f"\nProcessing form: {form.get('name', 'unnamed')}")
            print(f"Form HTML: {form.prettify()[:500]}...")  # Print first 500 chars of form HTML
            
            form_id = form.get('id')
            if form.get('id') is None or form.get('id') == "":
                classes = form.get('class')
                if classes and "elementor-form" in classes:
                    form_id = [c for c in classes if c.startswith("elementor-form-")][0] if any(c.startswith("elementor-form-") for c in classes) else "elementor-form"

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

            # Look for inputs in the form and in parent elementor-widget-form
            inputs = form.find_all(['input', 'select', 'textarea'])
            print(f"Found {len(inputs)} inputs directly in form")
            
            if not inputs:
                print("No inputs found directly in form, looking in parent widget...")
                parent_widget = form.find_parent('div', class_='elementor-widget-form')
                if parent_widget:
                    inputs = parent_widget.find_all(['input', 'select', 'textarea'])
                    print(f"Found {len(inputs)} inputs in parent widget")
            
            # If still no inputs, look in the entire document for inputs with form_fields[name] pattern
            if not inputs:
                print("No inputs found in parent widget, looking for form_fields inputs...")
                all_inputs = soup.find_all(['input', 'select', 'textarea'])
                for input_tag in all_inputs:
                    name = input_tag.get('name', '')
                    if name and 'form_fields[' in name:
                        inputs.append(input_tag)
                print(f"Found {len(inputs)} inputs with form_fields pattern")
            
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

                # Find associated label - Updated for Elementor forms
                input_id = input_tag.get('id')
                if input_id:
                    # Try to find label by 'for' attribute
                    label = form.find('label', {'for': input_id})
                    if not label:
                        # Try to find label within the same elementor-field-group div
                        parent_div = input_tag.find_parent('div', class_='elementor-field-group')
                        if parent_div:
                            label = parent_div.find('label', class_='elementor-field-label')
                            print(f"Found label in parent div: {label.get_text().strip() if label else 'None'}")

                if label:
                    input_details["label"] = label.get_text().strip()

                if input_type == 'select':
                    options = input_tag.find_all('option')
                    input_details["options"] = [{"value": option.get("value"), "text": option.get_text()} for option in options]

                # Exclude inputs in the inputs_to_exclude list
                if input_details["name"] not in inputs_to_exclude:
                    form_details["inputs"].append(input_details)
                    print(f"Added input to form: {input_details['name']}")

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
                print(f"Added form to results: {form_details['name']} with {len(form_details['inputs'])} inputs")
            else:
                print(f"Excluded form as search form: {form_details['name']}")

    except Exception as e:
        print(f"Error analyzing {url}: {e}")
        import traceback
        traceback.print_exc()
    return forms_found 