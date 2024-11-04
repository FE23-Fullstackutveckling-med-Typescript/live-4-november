import { useState, useEffect } from "react";
import "./App.css";

import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

import { TodosResponse, Todo } from "./types/types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch("https://dummyjson.com/todos");
      const data: TodosResponse = await response.json();

      console.log(data);
      setTodos(data.todos);
    }

    getTodos();
  }, []);

  function addNewTodo(todoText: string) {
    const newTodo: Todo = {
      completed: false,
      userId: todos.length + 1,
      todo: todoText,
      id: todos.length + 1,
    };

    const tempArr = [...todos];
    tempArr.push(newTodo);

    setTodos(tempArr);

    // setTodos((prevState) => {
    //   return [...prevState, newTodo]
    // })
  }

  const todoComponents = todos.map((todo) => {
    return (
      <TodoItem text={todo.todo} completed={todo.completed} key={todo.id} />
    );
  });

  return (
    <>
      <ul>{todoComponents}</ul>
      <AddTodo addNewTodo={addNewTodo} />
    </>
  );
}

export default App;
