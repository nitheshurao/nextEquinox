import { Margin } from '@mui/icons-material';
import { Box, Card, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Divider from '@mui/material/Divider';
import React from 'react';
const MyCard = (props: any) => {
  return (
    <Card
      sx={{
        board: '2px solid blue',
        width: '180px',
        borderRadius: '30px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '2px solid blue ',
      }}
    >
      <Typography sx={{ display: 'flex' }}>{props?.title}</Typography>
      <Typography sx={{ display: 'flex' }} fontWeight="600">
        {props?.subtitle}
      </Typography>
    </Card>
  );
};
function RoadMap() {
  return (
    <Box display={'flex'} justifyContent={'center'} m={'30px auto'} width={'60%'}>
      {' '}
      <Card sx={{ border: '10px solid #818BF4', borderRadius: '24px', width: 'auto' }}>
        <Grid container spacing={'2'} sx={{ margin: 'auto' }}>
          <Grid xs={6} sx={{ padding: '10px' }} display={'flex'} justifyContent={'center'}>
            <Card sx={{ backgroundColor: '#9bb5d6', width: '100%' }}>
              <Card
                sx={{
                  //   width: '100%',
                  height: '30px',
                  margin: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ margin: 'auto', fontSize: '20px', fontWeight: '600' }}>
                  Full Stack Developer Roadmap
                </Typography>
              </Card>

              <Grid container padding={'20px'}>
                <Grid xs={11}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    {<MyCard subtitle="React" title="Step 01" />}
                    <Divider sx={{ width: '10%', border: '1px solid', margin: 'auto 0px' }} />

                    <CircleOutlinedIcon sx={{ margin: 'auto 0px' }} />
                    <Divider
                      sx={{ margin: '40px 0px -20px -14px', border: '1px solid' }}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                  </Box>
                </Grid>

                <Grid sx={{ display: 'flex', justifyContent: 'end' }} xs={10.8}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Divider
                      sx={{ margin: '40px -14px -20px 10px', border: '1px solid' }}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                    <CircleOutlinedIcon sx={{ margin: 'auto 0px' }} />

                    <Divider sx={{ width: '10%', border: '1px solid', margin: 'auto 10px' }} />
                    {<MyCard subtitle="Course Name" title="Step 02" />}
                  </Box>
                </Grid>

                <Grid xs={11}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    {<MyCard subtitle="Course Name" title="Step 02" />}
                    <Divider sx={{ width: '10%', border: '1px solid', margin: 'auto 0px' }} />
                    <CircleOutlinedIcon sx={{ margin: 'auto 0px' }} />
                    <Divider
                      sx={{ margin: '40px 0px -20px -14px', border: '1px solid' }}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                  </Box>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'end' }} xs={10.8}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Divider
                      sx={{ margin: '40px -14px -20px 10px', border: '1px solid' }}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                    <CircleOutlinedIcon sx={{ margin: 'auto 0px' }} />

                    <Divider sx={{ width: '10%', border: '1px solid', margin: 'auto 10px' }} />
                    {<MyCard subtitle="Course Name" title="Step 02" />}
                  </Box>
                </Grid>
                <Grid xs={11}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    {<MyCard subtitle="React" title="Step 04" />}
                    <Divider sx={{ width: '10%', border: '1px solid', margin: 'auto 0px' }} />

                    <CircleOutlinedIcon sx={{ margin: 'auto 0px' }} />
                    <Divider
                      sx={{ margin: '40px 0px -30px -14px', border: '1px solid' }}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                  </Box>
                </Grid>

                <Grid sx={{ display: 'flex', justifyContent: 'center' }} xs={11}>
                  {<MyCard subtitle="" title="Goal Achieved" />}
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {/* ......... */}
          <Grid xs={6} sx={{ padding: '10px' }} display={'flex'} justifyContent={'center'}>
            <Card sx={{ backgroundColor: '#F0FBFF', width: 'auto' }}>
              <Card
                sx={{
                  //   width: '300px',
                  margin: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography sx={{ margin: 'auto', fontSize: '20px', fontWeight: '600' }}>Career Navigator</Typography>
                <Typography sx={{ margin: 'auto' }}>Your Roadmap to Success</Typography>
              </Card>
              <Box sx={{ margin: '10px' }}>
                <Typography sx={{ margin: 'auto', fontSize: '20px', fontWeight: '600' }}>Your Path:</Typography>
                <Typography sx={{ margin: 'auto' }}>
                  Start with a clear roadmap of steps like "React" and more, tailored to guide you to become a Full
                  Stack Developer.
                </Typography>
              </Box>
              <Box sx={{ margin: '10px' }}>
                <Typography sx={{ margin: 'auto', fontSize: '20px', fontWeight: '600' }}>Step Insights:</Typography>
                <Typography sx={{ margin: 'auto' }}>
                  Get detailed guidance at every step, understanding what you'll learn and its relevance to your career
                </Typography>
              </Box>
              <Box sx={{ margin: '10px' }}>
                <Typography sx={{ margin: 'auto', fontSize: '20px', fontWeight: '600' }}>
                  {' '}
                  Resources & Support:
                </Typography>
                <Typography sx={{ margin: 'auto' }}>
                  Access articles, tips, and motivation right when you need them to keep progressing towards your dream
                  job.
                </Typography>
              </Box>
              <Box sx={{ margin: '10px' }}>
                <Typography sx={{ margin: 'auto', fontSize: '20px', fontWeight: '600' }}>
                  {' '}
                  Seize your future with Career Navigator:
                </Typography>
                <Typography sx={{ margin: 'auto' }}>where your career aspirations become your achievements.</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default RoadMap;
