import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { addTodoItem } from '../actions';
import { connect } from 'react-redux';

const TodoInput = ({ addTodoItem }) => {
  const [todoInputText, setTodoInputText] = useState("");

  const onTodoInputChange = (e) => {
    setTodoInputText(e.target.value);
  }

  const addTodo = () => { 
    addTodoItem(todoInputText);
    setTodoInputText('');
  }

  return (
    <div style={{ paddingTop: '45px' }}>
      <InputGroup>
        <Input placeholder="Type todo description" value={todoInputText} onChange={onTodoInputChange} />
        <InputGroupAddon addonType="append">
          <Button color="secondary" onClick={addTodo}>Add Todo Item</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}


export default connect(null, { addTodoItem })(React.memo(TodoInput));