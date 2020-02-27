import { createSelector } from 'reselect';

const todoSelector = state => state.todo.allTodoItems;
const searchTermSelector = state => state.todo.searchTerm;

export const filteredTodos = createSelector(
  [todoSelector, searchTermSelector],
  (todos, searchTerm) => {
    return todos.filter(todo => todo.match(new RegExp(searchTerm, 'i')));
  }
);