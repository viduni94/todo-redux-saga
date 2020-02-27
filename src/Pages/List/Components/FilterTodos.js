import React from 'react';
import {
  InputGroup,
  Input,
} from 'reactstrap';
import { setSearchTerm } from '../actions';
import { connect } from 'react-redux';

const FilterTodos = ({ setSearchTerm, searchTerm }) => {
  const onTodoInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div style={{ paddingTop: '25px' }}>
      <InputGroup>
        <Input placeholder="Filter todos by typing in a value.." value={searchTerm} onChange={onTodoInputChange} />
      </InputGroup>
    </div>
  );
}

const mapStateToProps = state => ({
  searchTerm: state.todo.searchTerm,
});

export default connect(mapStateToProps, { setSearchTerm })(React.memo(FilterTodos));
