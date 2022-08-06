import React from 'react';

const TodoCard = ({ todo }) => {
  const { title, completed } = todo;
  return (
    <div>
      <h4>{title}</h4>
      <h6>{`completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
