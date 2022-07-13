import React from 'react';
import { Box, List } from '@mui/material';
import ItemCard from './item-card';
import { selectSwapiItems } from '../store/reducers/swapi-items-slice';
import { useStoreSelector } from '../store/hooks';

const ItemList: React.FC = () => {
  const swapiItems = useStoreSelector(selectSwapiItems);
  if (!swapiItems.length) {
    return null;
  }
  return (
    <Box mt={8}>
      <List>
        {swapiItems.map(item => (
          <ItemCard key={item.url} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default ItemList;
