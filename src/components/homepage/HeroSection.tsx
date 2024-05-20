import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt={{
        xs: '24px',
        sm: '30px',
        md: '40px',
      }}
      pb={{
        xs: '60px',
        sm: '80px',
        md: '160px',
      }}
      mb={{
        xs: '100px',
        sm: '150px',
      }}
      width="100%"
      //   height="calc(100vh - 65px)"
      sx={{ background: 'radial-gradient(ellipse at right top, #ADB7E4 5%, #FFFFFF 80%,  #ADB7E4 150%)' }}
    >
      <Box component="div" height="100%" width="100%" top="0px" zIndex={1}>
        <Grid container>
          <Grid xs={6} container display={'flex'} margin={'auto'}>
            <Grid justifyContent={'center'} display={'flex'} xs={4} height={'190px'}>
              <Box justifyContent={'center'} display={'flex'}>
                <img src="/assets/icons/LineV.svg" style={{ width: '10%', margin: '20px' }} />
                <Typography fontWeight={600} fontSize={'80px'}>
                  Learn
                </Typography>
              </Box>
            </Grid>
            <Grid xs={8} display={'flex'} container flexDirection={'column'} height={'190px'}>
              <Box display={'flex'}>
                <img src="/assets/icons/DLine.svg" style={{ width: '60px', marginTop: '-200px' }} />
                <Typography fontWeight={600} fontSize={'80px'} height={'90px'}>
                  any skill
                </Typography>
              </Box>{' '}
              <Box display={'flex'} margin={'10px'}>
                <Typography fontWeight={600} fontSize={'60px'} color={'#FF63A5'}>
                  Essential to be Special
                </Typography>
              </Box>
              <img src="/assets/icons/LineHg.svg" style={{ margin: 'auto 10px' }} />
            </Grid>
            <img src="/assets/icons/Lineh.svg" style={{ margin: '10px auto' }} />
          </Grid>
          <Grid xs={5} margin={'auto'}>
            <Image src="/assets/icons/Hone1.svg" width={9} height={0} alt="about-lfx-cover" layout="responsive" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
