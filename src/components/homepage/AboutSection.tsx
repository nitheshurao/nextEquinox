import { Card, CardMedia, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <Box width="100%">
      <Stack
        direction={{ md: 'row', sm: 'column' }}
        justifyContent="start"
        alignItems="start"
        columnGap={5}
        width={'60%'}
        margin={'50px auto'}
      >
        <Grid container>
          <Grid xs={5}>
            {' '}
            <Box mb={{ xs: '20px', sm: 'none' }} maxWidth={{ xs: '100%', md: '50%' }} px="16px">
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '-10px',
                  width: '400px',
                  height: '70px',
                  border: '1px solid blue',
                  zIndex: '100',
                }}
              >
                <Typography sx={{ margin: '20px' }}>Technical Courses</Typography>
                <CardMedia
                  component="img"
                  sx={{ width: '40px', height: '40px', margin: 'auto 70%' }}
                  image="/assets/images/R2.svg"
                  alt="Paella dish"
                />
              </Card>
              <Box sx={{ margin: '-20px' }}>
                {' '}
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '400px',
                    zIndex: '-20px',
                    height: '70px',
                  }}
                >
                  <Typography sx={{ margin: '20px' }}>Non-Technical courses</Typography>
                  <CardMedia
                    component="img"
                    sx={{ width: '40px', height: '40px', margin: 'auto 70%' }}
                    image="/assets/images/R2.svg"
                    alt="Paella dish"
                  />
                </Card>
              </Box>

              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: 'auto',
                  width: '400px',
                  height: '70px',
                  zIndex: '-8000',
                }}
              >
                <Typography sx={{ margin: '20px' }}>vocational courses</Typography>
                <CardMedia
                  component="img"
                  sx={{ width: '40px', height: '40px', margin: 'auto 70%' }}
                  image="/assets/images/R2.svg"
                  alt="Paella dish"
                />
              </Card>
            </Box>
          </Grid>
          <Grid
            xs={7}
            sx={{
              background: 'radial-gradient(ellipse at right top, #ADB7E4 5%, #FFFFFF 80%,  #ADB7E4 150%)',
              borderRadius: '30px',
              border: '2px soild black',
              padding: '20px',
            }}
          >
            {' '}
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: 'auto',
                  //   width: '400px',
                  //   height: '70px',
                }}
              >
                {' '}
                <Typography fontSize={'20px'} fontWeight={400} margin={'30px'}>
                  Create your own Course
                </Typography>
                <CardMedia
                  component="img"
                  sx={{ width: '240px', height: '240px', marginTop: '-160px' }}
                  image="/assets/images/p2img.svg"
                  alt="Paella dish"
                />
              </Box>
            </Box>
            <FormControl sx={{ margin: '30px' }}>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Technical"
                name="radio-buttons-group"
              >
                <FormControlLabel sx={{ margin: 'auto' }} value="Technical" control={<Radio />} label="Technical" />
                <FormControlLabel
                  sx={{ margin: 'auto' }}
                  value="Non-Technical"
                  control={<Radio />}
                  label="Non-Technical"
                />
                <FormControlLabel sx={{ margin: 'auto' }} value="Vocational" control={<Radio />} label="Vocational" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default AboutSection;
