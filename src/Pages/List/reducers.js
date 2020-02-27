import { Map, List } from 'immutable';
import { ADD_TODO_ITEM, LIST_ITEM_RECEIVED, SET_SEARCH_TERM } from "./actionTypes";
import { TODO_ITEMS_FETCHED } from '../../shared/actionTypes';

const initialState = Map({
  allTodoItems: List([]),
  searchTerm: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ITEM:
    case LIST_ITEM_RECEIVED:
      return state.updateIn(['allTodoItems'], allTodoItems => allTodoItems.push(action.payload));
    case TODO_ITEMS_FETCHED:
      return state.set('allTodoItems', List(action.payload));
    case SET_SEARCH_TERM:
      return state.set('searchTerm', action.payload);
    default:
      return state;
  }
}
