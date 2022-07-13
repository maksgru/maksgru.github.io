import { storage } from '../utils/storage';
import { SignInDataType } from '../types/user-types';

export const signInFetch = (userData: SignInDataType): Promise<{ login: string }> => {
  const login = storage.getUserData();
  if (!login) {
    storage.setUserData(userData);
  }
  return Promise.resolve({
    login: storage.getUserData() || ''
  });
};
