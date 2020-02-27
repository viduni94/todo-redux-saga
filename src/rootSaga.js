import { all } from 'redux-saga/effects';
import actionWatcher from './Pages/List/sagas';

export default function* rootSaga() {
  yield all([actionWatcher()]);
}