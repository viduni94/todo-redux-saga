import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_TODO_ITEMS, TODO_ITEMS_FETCHED } from './actionTypes';

function* fetchTodoItems() {
  const listItems = [
    'List item 1',
    'List item 2',
    'List item 3',
  ];
  yield put({ type: TODO_ITEMS_FETCHED, payload: listItems });
}

export default function* todoItemsActionWatcher() {
  yield takeLatest(FETCH_TODO_ITEMS, fetchTodoItems);
}