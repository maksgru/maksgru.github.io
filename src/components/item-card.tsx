import React from 'react';
import Highlighter from 'react-highlight-words';
import { SwapiItemType } from '../types/swapi-types';
import { Card, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useStoreDispatch, useStoreSelector } from '../store/hooks';
import { selectQueryString, setSwapiItem } from '../store/reducers/swapi-items-slice';

type ItemCardPropsType = {
  item: SwapiItemType;
};

const ItemCard: React.FC<ItemCardPropsType> = props => {
  const { item } = props;
  const dispatch = useStoreDispatch();
  const queryString = useStoreSelector(selectQueryString);
  const setItem = () => {
    dispatch(setSwapiItem(item))
  };
  const reResult = item.url.match(/api(\/(\w+)\/\d)/);
  const resourceName = reResult && reResult.length ? reResult[2][0].toUpperCase()+reResult[2].slice(1) : '';

  const itemName = item.name || item.title;

  return (
    <ListItem>
      <Card sx={{ width: '100%' }}>
        <ListItemButton onClick={setItem} sx={{ justifyContent: 'space-between' }}>
          <ListItemText
            sx={{ width: '40%' }}
            primary={
            <Highlighter
              highlightStyle={{ fontWeight: '700', background: 'none' }}
              searchWords={[queryString]}
              autoEscape={true}
              textToHighlight={itemName}
            />
          } />
          <ListItemText sx={{ width: '40%' }} primary={resourceName} />
        </ListItemButton>
      </Card>
    </ListItem>
  );
};

export default ItemCard;
