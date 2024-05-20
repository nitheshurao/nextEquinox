import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import MuiTextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react';

import type { ITextareaAutosizeProps } from './Textarea.types';

const Textarea: React.FC<ITextareaAutosizeProps> = ({ disabled, placeholder, value, error, ...rest }) => {
  const theme = useTheme();

  return (
    <Box display="flex" width="100%">
      <MuiTextareaAutosize
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        // minRows={3}
        style={{
          width: '100%',
          resize: 'vertical',
          border: `1px solid ${error ? theme.palette.error.main : theme.palette.primary.main}`,
          borderRadius: '20px',
          padding: '20px 30px',
          maxWidth: '100%',
          outlineColor: theme.palette.primary.main,
          background: disabled ? alpha(theme.palette.grey[400], 0.2) : theme.palette.background.paper,
          color: theme.palette.text.primary,
          lineHeight: '22px',
          fontSize: '16px',
          fontWeight: 400,
          fontFamily: [
            'Gantari',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        }}
        {...rest}
      />
    </Box>
  );
};

export default Textarea;
