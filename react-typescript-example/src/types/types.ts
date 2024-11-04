export type Todo = {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
};

export type TodosResponse = {
  limit: number;
  skip: number;
  todos: Todo[];
  total: number;
};
