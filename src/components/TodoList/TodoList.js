import React from 'react';
import ListItem from './ListItem.js/ListItem';

const TodoList = ({ todos, updateTaskHandler, deleteTaskHandler }) => {

  return (
    <ul>
      {todos.map(todo => (
        <ListItem
          key={todo.id}
          todo={todo}
          checkboxHandler={updateTaskHandler}
          deleteTaskHandler={deleteTaskHandler}
        />
      ))}
    </ul>
  );

};

export default TodoList;