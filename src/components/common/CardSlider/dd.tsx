import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const CardSlider: React.FC = (props) => {
  const { mycard }: any = props;
  return (
    <Card
      sx={{
        borderRadius: '7px',
        width: '333px',
        height: '333px',
        margin: '10px',
        '&:hover': { backgroundImage: `url(${mycard.bgimg})` },
      }}
    >
      <CardHeader
        sx={{ marginLeft: '70%' }}
        avatar={
          <Card sx={{ padding: '10px', border: '1px solid #49C7E7', boxShadow: 'none' }}>
            <CardMedia component="img" height="45" width="45" image={mycard?.imgurl} alt="Paella dish" />
          </Card>
        }
      />
      <CardContent sx={{ marginTop: '30%' }}>
        <Typography
          fontSize="24px"
          fontWeight={600}
          sx={{
            marginTop: '20px ',
            lineHeight: 'normal',
            color: 'primary.main',
          }}
        >
          {mycard?.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardSlider;
