import React from 'react';

const TodoHeader = () => {
  return (
    <h3 style={{ textTransform: "uppercase", textAlign: "center", paddingBottom: '5px' }}>
      Todo List
    </h3>
  );
}

export default React.memo(TodoHeader);