// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
// import Image from 'next/image';
import { NextSeo } from 'next-seo';

import HomePageContainer from '@/containers/HomepageContainer/HomePageContainer';

const HomePage: NextPage = () => (
  <>
    <NextSeo title="LFX · Liquid Forex" description="Unlock Your Financial Potential with Liquid Forex (LFX)" />
    {/* <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      <Image src="/assets/logos/logo_text.svg" alt="logo" width={500} height={200} />
      <Typography color="grey.500" fontSize="20px" mt="30px" fontWeight={300}>
        Coming Soon. Stay Tuned.
      </Typography>
    </Box> */}
    <HomePageContainer />
  </>
);

export default HomePage;
