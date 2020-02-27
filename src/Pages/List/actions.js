import { ADD_TODO_ITEM, FETCH_TODO_ITEMS } from "./events";

// Add to do item
export const addTodoItem = todoInfo => ({
  type: ADD_TODO_ITEM,
  payload: todoInfo,
});

// Fetch todos
export const fetchTodos = todoInfo => ({
  type: FETCH_TODO_ITEMS,
  payload: [
    'List item 1',
    'List item 2',
    'List item 3',
    'List item 4',
    'List item 5',
  ],
});
