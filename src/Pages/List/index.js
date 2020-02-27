import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import TodoHeader from './Components/TodoHeader';
import TodoInput from './Components/TodoInput';
import FetchListItemButton from './Components/FetchListItemButton';
import { fetchTodos } from './actions';
import { connect } from 'react-redux';

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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allTodos: state.todo.allTodoItems,
});

export default connect(mapStateToProps, { fetchTodos })(TodoList);