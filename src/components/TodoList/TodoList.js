import React from 'react';
import ListItem from './ListItem.js/ListItem';

const TodoList = ({ todos, updateTaskHandler, deleteTaskHandler, category }) => {

  let lists = todos.map(todo => (
    <ListItem
      key={todo.id}
      todo={todo}
      checkboxHandler={updateTaskHandler}
      deleteTaskHandler={deleteTaskHandler}
    />
  ));

  if (category === "active") {
    lists = todos
      .filter(todo => !todo.isCompleted)
      .map(todo => (
        <ListItem
          key={todo.id}
          todo={todo}
          checkboxHandler={updateTaskHandler}
          deleteTaskHandler={deleteTaskHandler}
        />
      ));
  }

  if (category === "completed") {
    lists = todos
      .filter(todo => todo.isCompleted)
      .map(todo => (
        <ListItem
          key={todo.id}
          todo={todo}
          checkboxHandler={updateTaskHandler}
          deleteTaskHandler={deleteTaskHandler}
        />
      ));
  }

  return (
    <ul>
      {lists}
    </ul>
  );

};

export default TodoList;