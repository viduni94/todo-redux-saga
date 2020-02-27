import { ADD_TODO_ITEM, FETCH_TODO_ITEMS, LIST_ITEM_RECEIVED } from "./actionTypes";

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
    case FETCH_TODO_ITEMS:
      return {
        ...state,
        allTodoItems: action.payload,
      };
    default:
      return state;
  }
}
