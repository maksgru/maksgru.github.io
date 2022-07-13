import React from 'react';
import { Box } from '@mui/material';
import SearchPanel from '../modules/search-panel';
import Header from '../modules/header';
import ItemList from '../components/item-list';
import { useStoreSelector } from '../store/hooks';
import { selectChosenItem } from '../store/reducers/swapi-items-slice';
import ItemDetails from '../components/item-details';

const MainPage = () => {
  const chosenItem = useStoreSelector(selectChosenItem);
  return (
    <>
      <Header />
    <Box>
      <SearchPanel />
      {chosenItem ? <ItemDetails item={chosenItem} /> : <ItemList />}
    </Box>
    </>
  );
};

export default MainPage;
