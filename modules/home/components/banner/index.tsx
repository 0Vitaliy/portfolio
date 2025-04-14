import { Wrap } from '@/components/wrap';
import { Box, TextField, Button } from '@mui/material';
import Image from 'next/image';

export const Banner = () => {
  return (
    <Box>
      <Wrap>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'calc(100vh - 118.5px)',
          }}
        >
          <Box
            sx={{
              fontSize: '52px',
              lineHeight: '70px',
              fontWeight: '700px',
              flex: 1,
            }}
          >
            Hi 👋,
            <br /> My name is
            <Box
              sx={{
                fontSize: '52px',
                fontWeight: 'bold',
                background:
                  'linear-gradient(to right, #13B0F5 3%, #E70FAA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
            >
              Vitalii Makovskyi
            </Box>
            I build things for web
          </Box>
          <Box>
            <Image src='/av.png' width={350} height={350} alt='' />
          </Box>
        </Box>
        <div className="elementor-element elementor-widget elementor-widget-form" data-id="contact-form" data-element_type="widget">
    <div className="elementor-widget-container">
        <form className="elementor-form" method="post" name="contact" id="contact-form" data-track-form="true">
            <div className="elementor-form-fields-wrapper elementor-labels-above">
                <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                    <label htmlFor="form-field-name" className="elementor-field-label">Name</label>
                    <input type="text" name="form_fields[name]" id="form-field-name" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Name"/>
                </div>
                
                <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100">
                    <label htmlFor="form-field-email" className="elementor-field-label">Email</label>
                    <input type="email" name="form_fields[email]" id="form-field-email" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Email"/>
                </div>
                
                <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                    <label htmlFor="form-field-message" className="elementor-field-label">Message</label>
                    <textarea className="elementor-field-textual elementor-field elementor-size-sm" name="form_fields[message]" id="form-field-message" rows={4}></textarea>
                </div>
                
                <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                    <button className="elementor-button elementor-size-sm" type="submit">
                        <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Send</span>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
        <Box>
          <form 
              method="post" 
              name="contact" 
              id="contact-form"
              data-track-form="true"
          >
              <label htmlFor="name">Name</label>
              <input 
                  type="text" 
                  name="name" 
                  id="name"
              />
              
              <label htmlFor="email">Email</label>
              <input 
                  type="email" 
                  name="email" 
                  id="email"
              />
              
              <label htmlFor="message">Message</label>
              <textarea 
                  name="message" 
                  id="message"
              ></textarea>
              
              <button type="submit">Send</button>
          </form>
        </Box>
      </Wrap>
    </Box>
  );
};
