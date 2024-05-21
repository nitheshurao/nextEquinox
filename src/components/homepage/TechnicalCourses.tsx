import { Subtitles } from '@mui/icons-material';
import { Box, Card, CardHeader, Grid, Typography } from '@mui/material';
import React from 'react';
const Mycard = (props: any) => {
  return (
    <Card
      sx={{
        boxShadow: 'none',
        width: '220px',
        height: '160px',
        padding: '10px',
        backgroundColor: `${props.bgcolot}`,
        borderRadius: props.boardR,
      }}
    >
      <CardHeader
        title={
          <Typography fontSize={'18px'} fontWeight={'400'}>
            Start Learning
          </Typography>
        }
        subheader={
          <Typography fontSize={'24px'} fontWeight={'600'} sx={{ marginTop: '20px' }} color={'black'}>
            {props.subtitle}
          </Typography>
        }
      />
    </Card>
  );
};

function TechnicalCourses(props: any) {
  const { data } = props;
  return (
    <Card>
      <Box display={'flex'} justifyContent={'center'} width={'80%'} margin={' 40px auto'} flexDirection={'column'}>
        <Card>
          <Card
            sx={{
              board: '2px solid blue',
              width: '90%',
              borderRadius: '30px',
              backgroundColor: '#FFF0D1',
              margin: '20px auto',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Card
              sx={{
                board: '2px solid blue',
                width: '100%',
                height: '60px',
                borderRadius: '30px',
                // backgroundColor: '#5ACBFF',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                border: '2px solid #FF98DC ',
              }}
            >
              <Typography sx={{ display: 'flex', fontWeight: '600', fontSize: '42px', margin: 'auto' }}>
                {' '}
                <img style={{ width: '30px', margin: 'auto' }} src={props.img} />
                {props.Header}
              </Typography>
            </Card>
          </Card>
          <Grid container display={'flex'} justifyContent={'center'}>
            {data.map((v: any) => {
              return (
                <Grid xs={props.grdsize} sx={{ margin: '10px' }}>
                  <Mycard title={v.title} subtitle={v.Subtitles} bgcolot={v.bgcolot} boardR={props.boardR} />
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

export default TechnicalCourses;
