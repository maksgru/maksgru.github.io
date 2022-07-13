import { storage } from '../utils/storage';
import { useEffect } from 'react';
import {useStoreDispatch, useStoreSelector} from '../store/hooks';
import {authorize, selectUserLogin} from '../store/reducers/profile-slice';

const useAuthorized = (): boolean => {
  const isAuthorized = useStoreSelector(selectUserLogin);
  const dispatch = useStoreDispatch();

  useEffect(() => {
    const userLogin = !!storage.getUserData();
    if (!isAuthorized && userLogin) {
      dispatch(authorize());
    }
  }, [dispatch, isAuthorized]);

  return !!isAuthorized
};

export default useAuthorized;
