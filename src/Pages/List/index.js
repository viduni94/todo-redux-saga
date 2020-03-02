import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import FetchListItemButton from './components/FetchListItemButton';
import { fetchTodos } from '../../shared/actions';
import { connect } from 'react-redux';
import { filteredTodos } from './selectors';
import FilterTodos from './components/FilterTodos';
import Loader from '../../components/common/loader';

class TodoList extends React.PureComponent {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  render() {
    const { allTodos, isFetchingListItem } = this.props;
    console.log("TodoList -> render -> isFetchingListItem", isFetchingListItem)

    return (
      <div className="container" style={{ height: '79vh' }}>
        <div className="list">
          <TodoHeader />
          <ListGroup>
            {allTodos && allTodos.map((todo, i) => (
              <ListGroupItem key={i}>{todo}</ListGroupItem>
            ))}
            {isFetchingListItem ? <Loader /> : ''}
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
    isFetchingListItem: todoState.isFetchingListItem,
  });
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);