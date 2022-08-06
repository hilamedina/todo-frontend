import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const OneTodo = () => {
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState();

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        const responseTodo = response.data;
        setTodoDetails(responseTodo);
      });
  }, []);
  const { id: todoId, userId, title, completed } = todoDetails || {};
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1>{`todo title is ${title}`}</h1>
          <h1>{`todo id is ${todoId}`}</h1>
          <h1>{`todo userId is ${userId}`}</h1>
          <h1>{`todo completed is ${completed}`}</h1>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default OneTodo;
