import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { SwapiItemType } from '../types/swapi-types';

type ItemDetailsPropsType = {
  item: SwapiItemType;
};

const ItemDetails: React.FC<ItemDetailsPropsType> = props => {
  const { item } = props;
  const changeCase = (str: string) => {
    if (str.includes('_')) {
      return str.split('_').join(' ');
    }
    return str;
  };

  return (
    <Card sx={{ maxWidth: '70%', mx: 'auto' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name ? item.name : item.title}
        </Typography>
        {Object.entries(item).map(([k, v]) => typeof v === 'string'
          ? (
            <Box key={k} display="flex" justifyContent="space-between">
              <Typography variant="subtitle1" color="text.primary">
                {changeCase(k)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {v}
              </Typography>
            </Box>
          ) : null)}
      </CardContent>
    </Card>
  );
};

export default ItemDetails;
