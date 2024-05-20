import { Box, Button, OutlinedInput } from '@mui/material';
import React from 'react';

import Textarea from '@/components/core/Textarea';

const ContactUsForm: React.FC = () => {
  return (
    <Box component="form" display="flex" flexDirection="column" p="20px" width="100%" justifyContent="stretch">
      <OutlinedInput name="name" placeholder="Your Name" size="medium" sx={{ mb: ' 20px' }} />
      <OutlinedInput name="email" placeholder="Your Email" type="email" sx={{ mb: ' 20px' }} />
      <OutlinedInput name="subject" placeholder="Subject" sx={{ mb: ' 20px' }} />
      <Textarea name="message" placeholder="Message" minRows={10} />

      <Button variant="contained" sx={{ mr: '16px', my: '20px', maxWidth: 'fit-content' }} type="submit">
        Send a message
      </Button>
    </Box>
  );
};
export default ContactUsForm;
