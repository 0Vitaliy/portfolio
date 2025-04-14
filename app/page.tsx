import { HomeModules } from '@/modules/home';

export default function Home() {
  return (
    <div>
      <HomeModules />
      <form 
        method="post" 
        name="contact-form" 
        id="contact-form" 
        data-track-form="true"
        className="elementor-form"
      >
        <div className="elementor-form-fields-wrapper">
          <div className="elementor-field-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              name="form_fields[name]" 
              id="name" 
              className="elementor-field"
            />
          </div>
          <div className="elementor-field-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="form_fields[email]" 
              id="email" 
              className="elementor-field"
              required
            />
          </div>
          <div className="elementor-field-group">
            <label htmlFor="message">Message</label>
            <textarea 
              name="form_fields[message]" 
              id="message" 
              className="elementor-field"
              rows={4}
            />
          </div>
          <div className="elementor-field-group">
            <button type="submit" className="elementor-button">
              Send
            </button>
          </div>
        </div>
      </form>
  </div>
  );
}
