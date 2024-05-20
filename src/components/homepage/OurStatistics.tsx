import { Box, Card, CardHeader, Divider, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
const Mycard = (props: any) => {
  return (
    <Card sx={{ boxShadow: 'none', width: '300px' }}>
      <CardHeader
        avatar={
          <>
            <img src={`${props.img}`} />
          </>
        }
        title={
          <Typography fontSize={'24px'} fontWeight={'600'}>
            {props.title}
          </Typography>
        }
        subheader={
          <Typography fontSize={'18px'} fontWeight={'400'}>
            {props.subtitle}
          </Typography>
        }
      />
    </Card>
  );
};
function OurStatistics() {
  return (
    <>
      <Typography
        sx={{ margin: 'auto', justifyContent: 'center', display: 'flex', fontSize: '29px', fontWeight: '600' }}
      >
        Our Statistics
      </Typography>
      <Box display={'flex'} justifyContent={'center'} m={'30px auto'} width={'100%'}>
        <Card>
          <Grid container>
            <Grid>
              <Mycard title={'2000+'} subtitle={'Courses'} img={'/assets/images/static1.png'} />
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid>
              <Mycard title={'100000+'} subtitle={'Questions Bank'} img={'/assets/images/static2.png'} />
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid>
              <Mycard title={'1000+'} subtitle={'Certification'} img={'/assets/images/static3.png'} />
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid>
              <Mycard title={'4.9/5'} subtitle={'Google rating'} img={'/assets/images/static4.png'} />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}

export default OurStatistics;
