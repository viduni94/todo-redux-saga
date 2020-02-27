import { all } from 'redux-saga/effects';
import actionWatcher from './Pages/List/sagas';
import todoItemsActionWatcher from './shared/sagas';

export default function* rootSaga() {
  yield all([actionWatcher(), todoItemsActionWatcher()]);
}