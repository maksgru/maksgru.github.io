import { SignInDataType } from '../types/user-types';

export const storage = {
  getUserData: () => localStorage.getItem('login'),
  setUserData: (userData: SignInDataType) => {
    localStorage.setItem('login', userData.login)
    localStorage.setItem('password', userData.password)
  },
  dropUserDate: () => {
    localStorage.removeItem('login')
    localStorage.removeItem('password')
  }
};
