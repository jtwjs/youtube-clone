import {all, fork} from 'redux-saga/effects';
import {searchVideos,popularVideos} from './videos';

export default function* rootSaga() {
  yield all([
    fork(searchVideos),
    fork(popularVideos)
  ]);
}