import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { circularProgress } from '@material-ui/core';
// import { CircularProgress } from '@mui/material/';
import CircularProgress from '@mui/material/CircularProgress';

const OneTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/todos').then((response) => {
      const responseTodo = response.data;
      setTodos(responseTodo);
    });
  }, []);

  console.log(todos);
  const { id } = useParams();
  return (
    <>
      {todos ? (
        <div>
          {todos.map((todo) => {
            const { title, completed } = todos;
            return (
              <div>
                <h4>{title}</h4>
                <h4>{completed}</h4>
              </div>
            );
          })}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default OneTodo;
