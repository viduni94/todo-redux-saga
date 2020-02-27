import { createSelector } from 'reselect';
import { List } from 'immutable';

const todoSelector = state => state.allTodoItems;
const searchTermSelector = state => state.searchTerm;

export const filteredTodos = createSelector(
  [todoSelector, searchTermSelector],
  (todos, searchTerm) => {
    if (todos && searchTerm) {
      return List(todos.filter(todo => todo.match(new RegExp(searchTerm, 'i'))))
    } else {
      return List(todos);
    }
  }
);