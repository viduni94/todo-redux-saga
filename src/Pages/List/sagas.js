import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_LIST_ITEM, LIST_ITEM_RECEIVED } from './actionTypes';

function* fetchListItemText() {
  const generatedId = Math.floor(Math.random() * 12 + 1);
  const response = yield axios.get(`https://reqres.in/api/users/${generatedId}`);
  const { data } = response.data || {};
  const listItemText = data ? `${data.first_name} ${data.last_name}` : '';
  
  yield put({ type: LIST_ITEM_RECEIVED, payload: listItemText });
}

export default function* actionWatcher() {
  yield takeLatest(FETCH_LIST_ITEM, fetchListItemText);
}
