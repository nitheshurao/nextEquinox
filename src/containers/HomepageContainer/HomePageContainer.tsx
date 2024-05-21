// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from '@mui/material';
import React from 'react';
import Header from '@/components/common/Header';
import HeroSection from '@/components/homepage/HeroSection';
import AboutSection from '@/components/homepage/AboutSection';
import RoadMap from '@/components/homepage/RoadMap';
import CareerNav from '@/components/homepage/CareerNav';
import OurStatistics from '@/components/homepage/OurStatistics';
import Codinground from '@/components/homepage/Codinground';
import TechnicalCourses from '@/components/homepage/TechnicalCourses';
import Whatyouwillget from '@/components/homepage/Whatyouwillget';

const HomePageContainer: React.FC = () => {
  const Techdata: any = [
    { title: 'Start Learning', Subtitles: 'HTML', bgcolot: '#FFF0D1' },
    { title: 'Start Learning', Subtitles: 'JAVA', bgcolot: '#C8EEFF' },
    { title: 'Start Learning', Subtitles: 'NODEjs', bgcolot: '#FFDCDC' },
    { title: 'Start Learning', Subtitles: 'Python', bgcolot: '#E2E4FF' },
    { title: 'Start Learning', Subtitles: 'C++', bgcolot: '#E2E4FF' },
    { title: 'Start Learning', Subtitles: 'React', bgcolot: '#FFDC' },
    { title: 'Start Learning', Subtitles: 'Reactjs', bgcolot: '#FFF0D1' },
    { title: 'Start Learning', Subtitles: 'CSS', bgcolot: '#C8EEFF' },
  ];
  const NonTechdata: any = [
    { title: 'Start Learning', Subtitles: 'Accounting and Bookkeeping', bgcolot: '#FFF0D1' },
    { title: 'Start Learning', Subtitles: 'Entrepreneurship', bgcolot: '#C8EEFF' },
    { title: 'Start Learning', Subtitles: 'Human Resource Management', bgcolot: '#FFDCDC' },
    { title: 'Start Learning', Subtitles: 'Marketing Strategy', bgcolot: '#E2E4FF' },
    { title: 'Start Learning', Subtitles: 'Project Management', bgcolot: '#E2E4FF' },
  ];
  const Vocationadata: any = [
    { title: 'Start Learning', Subtitles: 'Business English', bgcolot: '#FFF0D1' },
    { title: 'Start Learning', Subtitles: 'Mastering Public Speaking', bgcolot: '#C8EEFF' },
    { title: 'Start Learning', Subtitles: 'English for Job Interviews', bgcolot: '#FFDCDC' },
    { title: 'Start Learning', Subtitles: 'Marketing StrategTechnical Englishy', bgcolot: '#E2E4FF' },
    { title: 'Start Learning', Subtitles: 'Mastering Business Communication', bgcolot: '#E2E4FF' },
  ];
  const getData: any = [
    { title: 'Important notes' },
    { title: 'E-Notes' },
    { title: 'Chapter test ' },
    { title: 'Topic test' },
    { title: 'Mock test ' },
    { title: 'Online examination ' },
    { title: 'Faq' },
    { title: 'Personal panel ' },
    { title: 'recommended Videos' },
    { title: 'MCQ' },
    { title: 'Road map ' },
    { title: 'Certification' },
  ];
  return (
    <Box sx={{ width: '100%' }} alignItems="center" justifyContent="center">
      <Header />
      <HeroSection />
      <AboutSection />
      <CareerNav />
      <RoadMap />
      <OurStatistics />
      <Codinground />
      <TechnicalCourses
        data={Techdata}
        Header={'Technical Courses'}
        img={'/assets/images/R2.svg'}
        boardR="0px"
        grdsize={2.3}
      />
      <TechnicalCourses
        data={NonTechdata}
        Header={'Non-Technical Courses'}
        img={'/assets/images/R2.svg'}
        boardR="40px"
        grdsize={3}
      />
      <TechnicalCourses
        data={Vocationadata}
        Header={'vocational courses'}
        img={'/assets/images/R2.svg'}
        boardR="0px"
        grdsize={3}
      />
      <Whatyouwillget data={getData} />
    </Box>
  );
};

export default HomePageContainer;
