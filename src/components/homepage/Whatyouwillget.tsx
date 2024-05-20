import { Box, Card, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';
const Mycard = (props: any) => {
  return (
    <Card
      sx={{
        // boxShadow: 'none',
        width: '220px',
        // height: '160px',
        padding: '10px',
      }}
    >
      <CardHeader
        title={
          <Typography fontSize={'18px'} fontWeight={'400'}>
            {props.title}
          </Typography>
        }
      />
    </Card>
  );
};

function Whatyouwillget(props: any) {
  return (
    <Card>
      <Card
        sx={{
          width: '90%',
          margin: '20px auto',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          boxShadow: 'none',
        }}
      >
        <Typography sx={{ display: 'flex', fontWeight: '600', fontSize: '42px', margin: 'auto' }}>
          {' '}
          What you will get
        </Typography>
      </Card>
      <Box display={'flex'} flexDirection={'row'} width={'50%'} justifyContent={'space-around'} margin={'auto'}>
        <img src="/assets/icons/LineHg.svg" style={{ margin: 'auto 10px' }} />
        <Card
          sx={{
            board: '2px solid blue',
            width: '280px',
            height: '60px',
            // backgroundColor: '#5ACBFF',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            border: '2px solid #FF98DC ',
          }}
        >
          <Typography sx={{ display: 'flex', fontWeight: '600', fontSize: '28px', margin: 'auto' }}>
            {' '}
            Certification
          </Typography>
        </Card>
        <Card
          sx={{
            board: '2px solid blue',
            width: '280px',
            height: '60px',
            // backgroundColor: '#5ACBFF',
            margin: '30px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            border: '2px solid #FF98DC ',
          }}
        >
          <Typography sx={{ display: 'flex', fontWeight: '600', fontSize: '28px', margin: 'auto' }}>
            {' '}
            Career Navigation
          </Typography>
        </Card>
        <img src="/assets/icons/Lineh.svg" style={{ marginTop: '30px' }} />
      </Box>
      <Box display={'flex'} justifyContent={'center'} width={'80%'} margin={' 40px auto'} flexDirection={'column'}>
        <Card>
          <Card
            sx={{
              width: '90%',
              margin: '20px auto',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              boxShadow: 'none',
            }}
          >
            <Typography sx={{ display: 'flex', fontWeight: '600', fontSize: '42px', margin: 'auto' }}>
              {' '}
              Here’s what more you will get
            </Typography>
          </Card>
          <Grid container display={'flex'} justifyContent={'center'}>
            {props?.data.map((v: any) => {
              return (
                <Grid xs={2.5} sx={{ margin: '10px' }}>
                  <Mycard title={v.title} />
                </Grid>
              );
            })}
          </Grid>
          <Card
            sx={{
              board: '2px solid blue',
              width: '10%',
              height: '60px',
              borderRadius: '30px',
              // backgroundColor: '#5ACBFF',
              margin: '30px auto',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              border: '2px solid #FF98DC ',
            }}
          >
            <Typography sx={{ display: 'flex', fontWeight: '400', fontSize: '18px', margin: 'auto' }}>
              {' '}
              Explore more
            </Typography>
          </Card>
        </Card>
      </Box>
    </Card>
  );
}

export default Whatyouwillget;
