import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useStoreDispatch } from '../store/hooks';
import { signIn } from '../store/reducers/profile-slice';
import { SignInDataType } from '../types/user-types';
import useAuthorized from '../hooks/useAuthorized';
import { useEffect } from 'react';

const initialValues: SignInDataType = {
  login: '',
  password: ''
};

const AuthPage = () => {
  const dispatch = useStoreDispatch();
  const isAuthorized = useAuthorized();
  const navigate = useNavigate();
  const onSubmit = (values: SignInDataType) => {
    dispatch(signIn(values));
  };
  const formik = useFormik({ initialValues, onSubmit });

  useEffect(() => {
    if (isAuthorized) {
      navigate('/');
    }
  }, [isAuthorized, navigate]);


  return (
    <Box pt={2}>
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      display="flex"
      flexDirection="column"
      mx="auto"
      mt="20%"
      maxWidth={300}
    >
      <TextField
        name="login"
        label="Login"
        value={formik.values.login}
        onChange={formik.handleChange}
        variant="outlined"
        margin="normal"
        size="small"
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        variant="outlined"
        margin="normal"
        size="small"
      />
      <Button
        type="submit"
        size="small"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Войти
      </Button>
    </Box>
    </Box>
  );
};

export default AuthPage;
