import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagamiddleware from 'redux-saga';
import logger from 'redux-logger';
import {createBrowserHistory} from 'history';
import rootSaga from '../saga/index';
import {videos} from './videos';

const customHistory = createBrowserHistory();

const sagaMiddleware = createSagamiddleware({
  context: {
    history: customHistory
  }
});
const middlewares = [logger, sagaMiddleware];

const rootReducer = combineReducers({
  videos: videos.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

sagaMiddleware.run(rootSaga);

export default store;