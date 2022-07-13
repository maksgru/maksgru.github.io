import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SignInDataType } from '../../types/user-types';
import { signInFetch } from '../../api/auth';
import { storage } from '../../utils/storage';
import { RootState } from '../store';

export interface IProfileState {
  userData: { login: string };
}

const initialState: IProfileState = {
  userData: { login: '' }
};

export const signIn = createAsyncThunk(
  'profile/sign-in',
  async (signInData: SignInDataType) => {
    return await signInFetch(signInData);
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    signOut: (state) => {
      storage.dropUserDate();
      state.userData.login = '';
    },
    authorize: (state) => {
      state.userData.login = storage.getUserData() || '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.userData = payload;
      })
  },
});

export const selectUserLogin = (state: RootState) => state.profile.userData.login;

export const { signOut, authorize } = profileSlice.actions;

export default profileSlice.reducer;
