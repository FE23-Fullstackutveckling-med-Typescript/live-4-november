import { useState } from "react";

type AddTodoProps = {
  addNewTodo: (todoText: string) => void; // Detta betyder att det är en funktion som vi skickar som props till AddTodo
};

function AddTodo(props: AddTodoProps) {
  const [todoText, setTodoText] = useState<string>("");

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  function handleClick() {
    props.addNewTodo(todoText);
  }

  return (
    <section>
      <input type="text" onChange={handleOnChange} />
      <button onClick={handleClick}>Lägg till</button>
    </section>
  );
}

export default AddTodo;
