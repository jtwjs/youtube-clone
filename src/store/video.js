import {createSlice} from '@reduxjs/toolkit';


export const video = createSlice({
  name: 'selectVideoReducer',
  initialState: null,
  reducers: {
    select: (state, action) => action.payload,
    unselect: (state, action) => null
  }
});

export const {
  select,
  unselect
} = video.actions;