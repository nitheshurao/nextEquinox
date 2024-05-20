import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Grid, IconButton, List, Stack, styled, Typography } from '@mui/material';
import { useRef } from 'react';

import type { ICardSliderProps } from './CardSlider.types';

export const StyledDiv = styled('div')`
  ::-webkit-scrollbar {
    display: none;
  }
}`;

/* eslint-disable no-param-reassign */
function arrayRotate(arr: any, reverse: boolean, line1: any) {
  if (reverse) {
    line1.current.scrollLeft -= 400;
  } else {
    line1.current.scrollLeft += 400;
  }
  return arr;
}

const CardSlider: React.FC<ICardSliderProps> = (props?: any) => {
  const { title, subheader, CardComponent, data } = props;
  const line1: unknown = useRef(null);

  const handleTransition = (reverse: boolean) => {
    arrayRotate(data, reverse, line1);
  };

  return (
    <Box
      sx={{
        justifyContent: 'start',
        backgroundColor: 'primary.light',
      }}
      display="flex"
      width="100%"
    >
      <Stack
        justifyContent="start"
        alignItems="start"
        p="0px"
        width={{
          xs: '98%',
          sm: '95%',
          md: '90%',
        }}
        sx={{
          justifyContent: 'start',
        }}
        mx="auto"
        mt="80px"
        py={{
          xs: '30px',
          md: '20px',
        }}
      >
        <Typography fontSize="20px" fontWeight={400} color="primary.main" textAlign="left" mb="20px">
          {title}
        </Typography>
        <Grid container>
          <Grid xs={11}>
            <Typography fontSize="50px" fontWeight={500} lineHeight="normal" textAlign="left">
              {subheader}
            </Typography>
          </Grid>

          <Grid xs={1} display={'flex'} justifyContent={'space-between'}>
            {/* <Button
              variant="contained"
              aria-label="delete"
              sx={{
                // margin: '-20px 10px',
                height: '63px',
                width: '63px',
                borderRadius: '50px',
                backgroundColor: 'primary.medium',
                color: 'primary.main',
              }}
              onClick={() => handleTransition(true)}
            >
              <ArrowBackIcon />
            </Button> */}
            <IconButton
              sx={{ p: '20px', backgroundColor: 'primary.light', borderRadius: '100%' }}
              onClick={() => handleTransition(true)}
            >
              <ArrowBackIcon sx={{ color: 'primary.main' }} />
            </IconButton>
            <IconButton
              sx={{ p: '20px', color: 'primary.light', borderRadius: '100%' }}
              onClick={() => handleTransition(false)}
            >
              <ArrowForwardIcon sx={{ color: 'primary.main' }} />
            </IconButton>
            {/* <Button
              variant="contained"
              aria-label="delete"
              sx={{
                height: '63px',
                width: '63px',
                borderRadius: '50px',
                backgroundColor: 'primary.medium',
                color: 'primary.main',
              }}
              onClick={() => handleTransition(false)}
            >
              <ArrowForwardIcon />
            </Button> */}
          </Grid>
        </Grid>

        <Grid
          container
          style={{
            display: 'flex',
            margin: 'auto',
            overflow: 'hidden',
          }}
        >
          <StyledDiv
            style={{
              display: 'flex',
              margin: 'auto',
              justifyContent: 'flex-start',
              padding: '10px',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
            }}
            ref={line1}
          >
            <List sx={{ display: 'flex', transition: '20s' }}>
              {data.map((card: any, i: number) => (
                <Grid key={i} item xs={12} sm={6} md={4} mr="16px">
                  <CardComponent card={card} />
                </Grid>
              ))}
            </List>
          </StyledDiv>
        </Grid>
      </Stack>
    </Box>
  );
};

export default CardSlider;
