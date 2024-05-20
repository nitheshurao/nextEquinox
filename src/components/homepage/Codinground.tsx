import { Box, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import Textarea from '../core/Textarea';
const MyCard = (props: any) => {
  return (
    <Card
      sx={{
        board: '2px solid blue',
        width: '100px',
        borderRadius: '30px',
        backgroundColor: '#5ACBFF',
        margin: '10px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '2px solid blue ',
      }}
    >
      <Typography sx={{ display: 'flex', fontWeight: '600', margin: 'auto' }}>{props?.title}</Typography>
    </Card>
  );
};
function Codinground() {
  return (
    <Box display={'flex'} justifyContent={'center'} width={'80%'} margin={'auto'}>
      {' '}
      <Box
        sx={{
          border: '5px solid #FFFFFF',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          borderRadius: '24px',
        }}
        display={'flex'}
        justifyContent={'center'}
      >
        <Grid
          container
          display={'flex'}
          justifyContent={'space-around'}
          sx={{ backgroundColor: '#F0FBFF', borderRadius: '24px' }}
        >
          <Grid xs={4} sx={{ margin: 'auto 10px', width: '800px' }}>
            <CardContent>
              <Typography sx={{ margin: '10px', fontSize: '30px', fontWeight: '400' }}>
                Your
                <strong> Coding </strong> Ground
              </Typography>{' '}
              <Typography sx={{ margin: '10px' }}>
                Ignite your coding potential on Coding Ground - an immersive online platform for hands-on learning,
                collaboration, and skill development.
              </Typography>
              <Box display={'flex'} sx={{ width: '600px' }} m={'10px'}>
                <MyCard title="HTML" />
                <MyCard title="CSS" />
                <MyCard title="JAVA" />
                <MyCard title="C++" />
              </Box>
            </CardContent>
          </Grid>
          <Grid xs={5} display={'flex'} justifyContent={'end'}>
            <Box>
              <img style={{ margin: '40px' }} src="assets/images/ccodingGrnd.png" alt="Paella dish" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Codinground;
