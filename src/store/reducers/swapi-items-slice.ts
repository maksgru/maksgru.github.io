import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getSwapiItemsFetch, ResourcesResponseType} from '../../api/swapi';
import {RootState} from '../store';
import {SwapiItemType} from '../../types/swapi-types';

export interface ISwapiItemsState {
  items: ResourcesResponseType;
  chosenItem: SwapiItemType | null;
  queryString: string;
}

const initialState: ISwapiItemsState = {
  items: [],
  chosenItem: null,
  queryString: ''
};

export const getItems = createAsyncThunk(
  'swapi/get-all',
  async (searchString: string, { dispatch }) => {
    dispatch(dropChosenItem());
    dispatch(setQueryString(searchString));
    return await getSwapiItemsFetch(searchString);
  }
);

export const swapiItems = createSlice({
  name: 'searchItems',
  initialState,
  reducers: {
    setSwapiItem: (state, action: PayloadAction<SwapiItemType>) => {
      state.chosenItem = action.payload;
    },
    dropChosenItem: (state) => {
      state.chosenItem = null;
    },
    setQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItems.fulfilled, (state, { payload }: PayloadAction<ResourcesResponseType>) => {
        state.items = payload;
      })
  },
});

export const { setSwapiItem, dropChosenItem, setQueryString } = swapiItems.actions;

export const selectSwapiItems = (state: RootState) => state.swapiItems.items;
export const selectChosenItem = (state: RootState) => state.swapiItems.chosenItem;
export const selectQueryString = (state: RootState) => state.swapiItems.queryString;

export default swapiItems.reducer;
