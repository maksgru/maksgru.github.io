import React, { useCallback } from 'react';
import { Box, debounce, TextField } from '@mui/material';
import { getItems} from '../store/reducers/swapi-items-slice';
import { useStoreDispatch } from '../store/hooks';

const SearchPanel: React.FC = () => {
  const dispatch = useStoreDispatch();

  const handleSearchChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = ({ target }) => {
    dispatch(getItems(target.value));
  };

  const debouncedChangeHandler = useCallback(
    debounce(handleSearchChange, 1000)
    , [dispatch]);

  return (
    <Box mx="auto" width="70%" mt={4}>
      <TextField
        name="search"
        placeholder="search"
        variant="outlined"
        margin="normal"
        size="small"
        onChange={debouncedChangeHandler}
        fullWidth
      />
    </Box>
  );
}

export default SearchPanel;
