import { ExpandMore, Margin, WidthFull } from '@mui/icons-material';
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Box,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { title } from 'process';
import React from 'react';
import Textarea from '../core/Textarea';

function CareerNav() {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      {' '}
      <Box sx={{ border: '5px solid #818BF4', borderRadius: '24px', width: '70%' }}>
        <Grid container display={'flex'} justifyContent={'space-between'}>
          <Box>
            <img style={{ margin: '-80px 50px' }} src="assets/images/CN1.svg" alt="Paella dish" />
          </Box>
          <Grid xs={7} sx={{ margin: 'auto 10px', width: '80%' }}>
            <CardContent>
              <Typography sx={{ margin: '10px', fontSize: '42px', fontWeight: '600', color: '#FF56C7' }}>
                Career Navigator
              </Typography>{' '}
              <Typography sx={{ margin: '10px' }}>
                Define Your Ambition, Design Your Path: Navigate to Your Dream Career with Precision.
              </Typography>
              <Box display={'flex'} sx={{ width: '600px' }} m={'10px'}>
                <Card sx={{ width: '300px', padding: '10px' }}>
                  <Typography>Full Stack Developer</Typography>
                </Card>

                <Card sx={{ width: '300px', padding: '10px' }}>
                  <Typography>Project Manager</Typography>
                </Card>
                <Card sx={{ width: '300px', padding: '10px' }}>
                  <Typography>Foreign Language Translator</Typography>
                </Card>
              </Box>
            </CardContent>
            <CardActions>
              <Box m={'10px'} sx={{ width: '100%' }}>
                <Textarea />
              </Box>{' '}
            </CardActions>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CareerNav;
