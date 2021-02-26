import {createSlice} from '@reduxjs/toolkit';



export const videos = createSlice({
  name: 'videosReducer',
  initialState: {
    data: [],
    isFetching: false,
    errorMessage: undefined
  },
  reducers: {
    requestSearchData: (state, action) => {
      state.isFetching = true;
    },
    responseSearchData: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    },
    requestPopularData: (state) => {
      state.isFetching = true;
    },
    responsePopularData: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
    },
    responseError: (state,action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    }
  }
});

export const {
  requestSearchData,
  responseSearchData,
  requestPopularData,
  responsePopularData,
  responseError
} = videos.actions;

