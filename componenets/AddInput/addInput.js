import styles from "./addInput.module.css";
import { useState } from "react";
// import TodoList from '../TodoList/TodoList'

function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: Math.random() * 1000,
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className={styles.addBtn} onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddInput;
