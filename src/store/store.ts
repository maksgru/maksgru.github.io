import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile-slice';
import swapiItemsReducer from './reducers/swapi-items-slice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    swapiItems: swapiItemsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
