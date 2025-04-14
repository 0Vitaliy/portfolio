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
        <Box>
        <form
          className="elementor-form"
          method="post"
          name="testfind"
          id="contact-form"
        >
            <div className="elementor-form-fields-wrapper elementor-labels-above">
                <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100">
                    <TextField
                        label="Name"
                        name="form_fields[name]"
                        type="text"
                        className="elementor-field elementor-size-sm elementor-field-textual"
                    />
                </div>
                <div className="elementor-field-type-email elementor-field-group elementor-column elementor-col-100">
                    <TextField
                        label="Email"
                        name="form_fields[email]"
                        type="email"
                        className="elementor-field elementor-size-sm elementor-field-textual"
                    />
                </div>
                <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-col-100">
                    <TextField
                        label="Message"
                        name="form_fields[message]"
                        multiline
                        rows={4}
                        className="elementor-field-textual elementor-field elementor-size-sm"
                    />
                </div>
                <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                    <Button 
                        type="submit"
                        className="elementor-button elementor-size-sm"
                    >
                        <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Send</span>
                        </span>
                    </Button>
                </div>
            </div>
        </form>
        </Box>
      </Wrap>
    </Box>
  );
};
