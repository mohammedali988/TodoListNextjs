import React, { useState } from "react";
import AddInput from "../AddInput/AddInput";
import TodoList from "../TodoList/todoList";
import styles from './todo.module.css'


function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.todo}>
      <h1 className={styles.header}>Todo List</h1>
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} /> 
    </div>
  );
}

export default Todo;
