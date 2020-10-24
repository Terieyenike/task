import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const resp = await fetch(
        'https://pacific-beyond-99149.herokuapp.com/todos'
      );
      const jsonData = await resp.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // delete todo function
  const deleteTodo = async (id) => {
    try {
      await fetch(`https://pacific-beyond-99149.herokuapp.com/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      {' '}
      <table className='table mt-5'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                {' '}
                <button
                  className='btn btn-danger'
                  onClick={() => deleteTodo(todo.todo_id)}>
                  Delete
                </button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodo;
