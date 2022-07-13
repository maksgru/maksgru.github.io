import React, { useCallback } from 'react';
import { Box, debounce, TextField } from '@mui/material';
import { getItems} from '../store/reducers/swapi-items-slice';
import { useStoreDispatch } from '../store/hooks';

const SearchPanel: React.FC = () => {
  const dispatch = useStoreDispatch();

  const handleSearchChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = ({ target }) => {
    dispatch(getItems(target.value));
  };

  const handleSpinnerChange = () => {
    console.log('spiner')
  }

  const debouncedChangeHandler = useCallback(
    debounce(handleSearchChange, 1000)
    , [dispatch]);

  return (
    <Box mx="auto" width="70%" mt={4} onChange={handleSpinnerChange}>
      <TextField
        name="search"
        placeholder="search"
        variant="outlined"
        margin="normal"
        size="small"
        onChange={debouncedChangeHandler}
        // value={searchValue}
        fullWidth
      />
    </Box>
  );
}

export default SearchPanel;
