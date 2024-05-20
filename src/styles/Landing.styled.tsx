// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Stack, styled } from '@mui/material';

// eslint-disable-next-line unused-imports/no-unused-vars
export const StyledStackrow: any = styled(Stack)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url(/assets/images/Watercolor_Wave.png)',
  margin: 'auto',
  scrollBehavior: 'smooth',
  height: '100vh',
  //   width: '100%',
}));

export const StyledBox: any = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '20px',
  //   margin: '',
  width: '60%',
}));
