import { takeEvery } from 'redux-saga/effects'
import {
  FETCH_HOME_MULTIDATA
} from './constants'
import axios from 'axios'

function* fetchHomeMultiData(action) {
  console.log('in?')
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata")
  console.log(res)
}

function* mySaga() {
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultiData)
}
export default mySaga