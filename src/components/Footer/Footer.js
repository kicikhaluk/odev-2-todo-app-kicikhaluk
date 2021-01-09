import React from 'react';
import Button from '../UI/Button/Button';
import styles from './Footer.module.css';

const Footer = ({ todos, clearCompletedTasks, categoryHandler }) => {

  const uncompletedTasks = todos.filter(todo => !todo.isCompleted);

  return (
    <footer className={styles.footer}>
      <p className={styles.pColor}><span>{uncompletedTasks.length}</span> items left</p>
      <div>
        <Button onClick={() => categoryHandler("all")}>All</Button>
        <Button onClick={() => categoryHandler("active")}>Active</Button>
        <Button onClick={() => categoryHandler("completed")}>Completed</Button>
      </div>
      <Button onClick={clearCompletedTasks}>Clear completed</Button>
    </footer>
  );
};

export default Footer;