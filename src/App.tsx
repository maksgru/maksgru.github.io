import React from 'react';
import { Box } from '@mui/material';
import AppRouter from './router';
import useAuthorized from './hooks/useAuthorized';
import { storage } from './utils/storage';
import Spinner from './components/spinner';

const App = () => {
  const isAuthorized = useAuthorized();
  const userLogin = !!storage.getUserData();
  if (!isAuthorized && userLogin) {
    return <Spinner />;
  }

  return (
    <Box>
      <AppRouter />
    </Box>
  );
}

export default App;
