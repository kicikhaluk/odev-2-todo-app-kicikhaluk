import React, { useState } from 'react';
import './index.css';
import Layout from './components/Layout/Layout';
import Card from './components/UI/Card/Card';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/UI/Footer/Footer';
import Form from './components/Form/Form';


const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Finish todoapp",
      isCompleted: false
    },
    {
      id: 2,
      task: "Groceries",
      isCompleted: false
    },
    {
      id: 3,
      task: "Learn Next.js",
      isCompleted: false
    },
    {
      id: 4,
      task: "Start the CS50",
      isCompleted: false
    },
  ]);

  const addNewTodo = (todo) => {
    const updatedTodos = todos.concat({
      id: todos.length + 1,
      task: todo,
      isCompleted: false
    });
    setTodos(updatedTodos);
  };

  const updateTask = (id, isCompleted) => {
    const getIndex = todos.findIndex(todo => todo.id === id);
    const updatedTodos = [...todos];
    updatedTodos[getIndex].isCompleted = isCompleted;
    setTodos(updatedTodos);
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // ***
  const completeAllTasks = () => {
    const completedTasks = todos.map(todo => ({
      ...todo,
      isCompleted: !todo.isCompleted
    }));
    setTodos(completedTasks);
  };

  return (
    <Layout>
      <Card>
        <Form
          newTodoHandler={addNewTodo}
          completeAllTasks={completeAllTasks}
        />
        <TodoList
          todos={todos}
          updateTaskHandler={updateTask}
          deleteTaskHandler={deleteTask}
        />
        <Footer
          todos={todos}
        />
      </Card>
    </Layout>
  );
}

export default App;
