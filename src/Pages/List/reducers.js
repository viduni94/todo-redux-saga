import { List, fromJS } from 'immutable';
import {
  ADD_TODO_ITEM, LIST_ITEM_RECEIVED, SET_SEARCH_TERM, FETCH_LIST_ITEM,
} from "./actionTypes";
import { TODO_ITEMS_FETCHED } from '../../shared/actionTypes';

const initialState = fromJS({
  allTodoItems: List([]),
  searchTerm: '',
  isFetchingListItem: false,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ITEM:
    case LIST_ITEM_RECEIVED:
      return state
        .set('isFetchingListItem', false)
        .updateIn(['allTodoItems'], allTodoItems => allTodoItems.push(action.payload));
    case TODO_ITEMS_FETCHED:
      return state.set('allTodoItems', List(action.payload));
    case SET_SEARCH_TERM:
      return state.set('searchTerm', action.payload);
    case FETCH_LIST_ITEM:
      return state.set('isFetchingListItem', true);
    default:
      return state;
  }
}
