import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TodoCard = ({ todo }) => {
  const { id, title, completed } = todo;
  //   let history = useHistory();
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: 'lightyellow',
        margin: '10px',
        padding: '10px',
        width: '150px',
      }}
      onClick={() => {
        navigate(`/onetodo/${id}`);
      }}
    >
      <h4>{title}</h4>
      <h6>{`completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
