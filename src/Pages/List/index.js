import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import TodoHeader from './Components/TodoHeader';
import TodoInput from './Components/TodoInput';
import FetchListItemButton from './Components/FetchListItemButton';
import { fetchTodos } from '../../shared/actions';
import { connect } from 'react-redux';
import { filteredTodos } from './selectors';
import FilterTodos from './Components/FilterTodos';

class TodoList extends React.PureComponent {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  render() {
    const { allTodos } = this.props;
    return (
      <div className="container" style={{ height: '79vh' }}>
        <div className="list">
          <TodoHeader />
          <ListGroup>
            {allTodos && allTodos.map((todo, i) => (
              <ListGroupItem key={i}>{todo}</ListGroupItem>
            ))}
          </ListGroup>
          <FetchListItemButton />
          <TodoInput />
          <FilterTodos />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const todoState = state.todo.toJS();
  return ({
    allTodos: filteredTodos(todoState),
  })
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);