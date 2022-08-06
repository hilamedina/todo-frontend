import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import TodoCard from './TodoCard';

const Todos = () => {
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
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {todos.map((todo) => {
            return <TodoCard key={todo.id} todo={todo} />;
          })}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};
export default Todos;
