import {
  ADD_TODO_ITEM,
  FETCH_LIST_ITEM,
} from "./actionTypes";

// Add to do item
export const addTodoItem = todoInfo => ({
  type: ADD_TODO_ITEM,
  payload: todoInfo,
});

// Fetch list item from API
export const fetchListItem = () => ({
  type: FETCH_LIST_ITEM,
});
