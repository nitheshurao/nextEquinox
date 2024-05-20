import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

import type { IBlogCardProps } from './BlogCard.types';

const BlogCard: React.FC<IBlogCardProps> = ({ card }) => {
  return (
    <Card
      elevation={0}
      sx={{ border: '1px solid', minWidth: '430px', borderColor: 'primary.medium', backgroundColor: 'transparent' }}
    >
      <CardMedia sx={{ height: 200 }} image={card.cover} title="green iguana" />
      <CardContent sx={{ backgroudColor: 'transparent', pb: '10px' }}>
        <Typography variant="body2" fontFamily="outfit" fontSize="16px" mb="10px" color="grey.900">
          {card.date}
        </Typography>
        <Typography gutterBottom variant="h5" fontWeight={600} fontSize="20px">
          {card.title}
        </Typography>
      </CardContent>
      <Button
        variant="text"
        size="small"
        sx={{ color: 'primary.main', textDecoration: 'underline', mt: '0px', mb: '20px' }}
      >
        Read More
      </Button>
    </Card>
  );
};

export default React.memo(BlogCard);
