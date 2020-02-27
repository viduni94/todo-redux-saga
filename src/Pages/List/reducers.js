import { ADD_TODO_ITEM, FETCH_TODO_ITEMS } from "./events";

const initialState = {
  allTodoItems: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ITEM:
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
