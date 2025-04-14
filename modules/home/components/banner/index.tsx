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
        <form className="elementor-form" method="post" name="DevTest2" id="DevTest25" data-track-form="9588ae54-fd43-4973-a81d-8a397717547f" data-hs-cf-bound="true">
			<input type="hidden" name="post_id" value="19"/>
			<input type="hidden" name="form_id" value="2ed402d"/>
			<input type="hidden" name="referer_title" value="Home - Trakt DEV test"/>

			<input type="hidden" name="queried_id" value="19"/>
			
			  <div className="elementor-form-fields-wrapper elementor-labels-above">
								<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
												<label htmlFor="form-field-name" className="elementor-field-label">
								Full Name							</label>
														<input size={1} type="text" name="form_fields[name]" id="form-field-name" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Full Name"/>
											</div>
								<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_fc6a714 elementor-col-100">
												<label htmlFor="form-field-field_fc6a714" className="elementor-field-label">
								Last Name							</label>
														<input size={1} type="text" name="form_fields[field_fc6a714]" id="form-field-field_fc6a714" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Last Name"/>
											</div>
								<div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_1ce8f53 elementor-col-100">
												<label htmlFor="form-field-field_1ce8f53" className="elementor-field-label">
								Phone							</label>
								<input size={1} type="tel" name="form_fields[field_1ce8f53]" id="form-field-field_1ce8f53" className="elementor-field elementor-size-sm  elementor-field-textual" pattern="[0-9()#&amp;+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted."/>

						</div>
								<div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
												<label htmlFor="form-field-email" className="elementor-field-label">
								Email							</label>
														  <input size={1} type="email" name="form_fields[email]" id="form-field-email" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Email" required={true} aria-required={true}/>
											</div>
								<div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
												<label htmlFor="form-field-message" className="elementor-field-label">
								Project description							</label>
						<textarea className="elementor-field-textual elementor-field  elementor-size-sm" name="form_fields[message]" id="form-field-message" rows={4}></textarea>				</div>
								<div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
					<button className="elementor-button elementor-size-sm" type="submit">
						<span className="elementor-button-content-wrapper">
																						<span className="elementor-button-text">Send</span>
													</span>
					</button>
				</div>
			</div>
		</form>
      </Wrap>
    </Box>
  );
};
