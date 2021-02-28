import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagamiddleware from 'redux-saga';
import logger from 'redux-logger';
import history from '../util/history';
import rootSaga from '../saga/index';
import {videoList} from './video_list';
import {video} from './video';


const sagaMiddleware = createSagamiddleware({
  context: {
    history
  }
});
const middlewares = [logger, sagaMiddleware];

const rootReducer = combineReducers({
  videoList: videoList.reducer,
  video: video.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

sagaMiddleware.run(rootSaga);

export default store;