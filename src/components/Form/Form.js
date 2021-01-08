import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import { ChevronDown } from '../icons/';
import styles from './Form.module.css';

const Form = ({ newTodoHandler, completeAllTasks }) => {
  const [todo, setTodo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    newTodoHandler(todo);
    setTodo('');
  };

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formElement}>
        <ChevronDown
          stroke="#e6e6e6"
          onClick={completeAllTasks}
          className={styles.cursorPointer}
        />
        <Input
          type="text"
          onChange={inputHandler}
          autoFocus
          value={todo}
        />
      </div>
    </form>
  );
};

export default Form;