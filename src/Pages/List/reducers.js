import { ADD_TODO_ITEM, LIST_ITEM_RECEIVED } from "./actionTypes";
import { TODO_ITEMS_FETCHED } from '../../shared/actionTypes';

const initialState = {
  allTodoItems: [],
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
      console.log(action.payload);
      return {
        ...state,
        allTodoItems: action.payload,
      };
    default:
      return state;
  }
}
