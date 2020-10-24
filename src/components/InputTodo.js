import React, { useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch('https://pacific-beyond-99149.herokuapp.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = 'https://terieyenike.github.io/task/';
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className='text-center mt-5'>Journal for task</h1>
      <form className='d-flex mt-5' onSubmit={onSubmitForm}>
        <input
          type='text'
          className='form-control'
          aria-label='What do you want to achieve today?'
          value={description}
          onChange={handleInputChange}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </>
  );
};

export default InputTodo;
