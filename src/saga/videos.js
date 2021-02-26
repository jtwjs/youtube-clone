import {call, takeEvery, put, getContext}  from 'redux-saga/effects';
import {mostPopular, search} from '../service/youtube';
import {requestSearchData,responseSearchData, responseError,requestPopularData,responsePopularData } from '../store/videos';



function* fetchSearchSaga(action) {

  try {
    const data = yield call(search, action.payload)
    yield put(responseSearchData(data))
  } catch(e) {
    console.log(e);
    yield put(responseError(e));
  }
}
function* fetchPopularSaga() {

  try{
    const data = yield call(mostPopular);
    yield put(responsePopularData(data));
  }catch(e) {
    yield put(responseError(e));
  }
}

function* goToHomeSaga() {
    const history = yield getContext('history');
    history.push('/');

}

export function* searchVideos() {
  yield takeEvery(requestSearchData, goToHomeSaga);
  yield takeEvery(requestSearchData, fetchSearchSaga);
}

export function* popularVideos() {
  yield takeEvery(requestPopularData, fetchPopularSaga);
}

