const validateTodo = (todoText) => {
  return todoText.trim() !== "";
};

const addTodo = (todos, todoText, setTodos, setTodoText) => {
  setTodos([...todos, { text: todoText, isComplete: false }]);
  setTodoText("");
};

const deleteTodo = (todos, index, setTodos) => {
  const updatedTodos = todos.filter((_, i) => i !== index);
  setTodos(updatedTodos);
};

const toggleComplete = (todos, index, setTodos) => {
  const updatedTodos = [...todos];
  updatedTodos[index].isComplete = !updatedTodos[index].isComplete;
  setTodos(updatedTodos);
};

export { validateTodo, addTodo, deleteTodo, toggleComplete };
