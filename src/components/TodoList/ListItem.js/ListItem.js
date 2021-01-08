import React from 'react';
import styles from './ListItem.module.css';

const ListItem = ({ todo, checkboxHandler, deleteTaskHandler }) => {

  return (
    <li className={styles.listItem}>
      {todo.isCompleted ? (
        <input
          type="checkbox"
          onChange={(e) => checkboxHandler(todo.id, e.target.checked)}
          checked
        />
      ) : (
          <input
            type="checkbox"
            onChange={(e) => checkboxHandler(todo.id, e.target.checked)}
          />
        )}
      <p className={`${todo.isCompleted && styles.lineThrough}`}>{todo.task}</p>
      <button className={styles.deleteBtn} onClick={() => deleteTaskHandler(todo.id)}>X</button>
    </li>
  );
};

export default ListItem;