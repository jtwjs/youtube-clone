import {call, takeEvery, put, getContext}  from 'redux-saga/effects';
import {mostPopular, search} from '../service/youtube';
import {requestSearchData,responseSearchData, responseError,requestPopularData,responsePopularData } from '../store/video_list';



function* fetchSearchSaga(action) {
  const history = yield getContext('history');
  try {
    const data = yield call(search, action.payload)
    yield history.push('/home');
    yield put(responseSearchData(data))
  } catch(e) {
    console.log(e);
    yield put(responseError(e));
  }
}
function* fetchPopularSaga() {
  const history = yield getContext('history');
  try{
    const data = yield call(mostPopular);
    history.push('/home');
    yield put(responsePopularData(data));
  }catch(e) {
    yield put(responseError(e));
  }
}


export function* searchVideos() {
  yield takeEvery(requestSearchData, fetchSearchSaga);
}

export function* popularVideos() {
  yield takeEvery(requestPopularData, fetchPopularSaga);
}

