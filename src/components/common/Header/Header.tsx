import type { Theme } from '@mui/material';
import { alpha, AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'alpha(theme.palette.primary.main, 0.4)',
        borderBottom: '0.5px solid',
        borderColor: (theme: Theme) => alpha(theme.palette.primary.main, 0.4),
        // maxHeight: '65px',
        p: 0,
      }}
    >
      <Container sx={{ maxWidth: { xs: '98%', sm: '95%', md: '90%' }, margin: 'auto', p: '0 !important' }}>
        <Toolbar
          sx={{
            width: '100%',
            py: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignIttems: 'center',
            px: '0 !important',
          }}
        >
          <Image src="/assets/logs/log.svg" width={130} height={50} alt="logo" />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button variant="outlined">Login</Button>
            <Button>
              <Image src="/assets/icons/Hone.svg" width={36} height={36} alt="logo" />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
