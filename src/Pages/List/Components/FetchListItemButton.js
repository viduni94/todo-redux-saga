import React from 'react';
import { Button } from 'reactstrap';
 import { fetchListItem } from '../actions';
import { connect } from 'react-redux';

const FetchListItemButton = ({ fetchListItem }) => {
  const fetchTodoText = () => { 
    fetchListItem();
  }

  return (
    <div style={{ paddingTop: '45px' }}>
      <Button color="secondary" onClick={fetchTodoText}>Fetch List Item</Button>
    </div>
  );
}

export default connect(null, { fetchListItem })(React.memo(FetchListItemButton));