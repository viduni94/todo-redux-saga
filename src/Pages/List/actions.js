import {
  ADD_TODO_ITEM,
  FETCH_LIST_ITEM,
  SET_SEARCH_TERM,
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

// Set the search term
export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
})
