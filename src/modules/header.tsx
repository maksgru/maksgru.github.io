import React, { useState } from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useStoreDispatch } from '../store/hooks';
import { signOut } from '../store/reducers/profile-slice';

const Header = () => {
  const dispatch = useStoreDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    dispatch(signOut());
    handleClose()
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ justifyContent: 'end', flexDirection: 'row' }}>
        <IconButton
          size="large"
          onClick={handleMenu}
          color="inherit"
          sx={{ width: 30, height: 30, mx: 2, my: 1 }}
        >
        <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
              horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleSignOut}>выйти</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
};

export default Header;
