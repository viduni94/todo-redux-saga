import { ADD_TODO_ITEM, LIST_ITEM_RECEIVED, SET_SEARCH_TERM } from "./actionTypes";
import { TODO_ITEMS_FETCHED } from '../../shared/actionTypes';

const initialState = {
  allTodoItems: [],
  searchTerm: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ITEM:
    case LIST_ITEM_RECEIVED:
      return {
        ...state,
        allTodoItems: [
          ...state.allTodoItems, action.payload,
        ],
      };
    case TODO_ITEMS_FETCHED:
      return {
        ...state,
        allTodoItems: action.payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      }
    default:
      return state;
  }
}
