type TodoItemProps = {
  text: string;
  completed: boolean;
};

function TodoItem(props: TodoItemProps) {
  console.log(props);

  return <li className={props.completed ? "done" : ""}>{props.text}</li>;
}

export default TodoItem;
