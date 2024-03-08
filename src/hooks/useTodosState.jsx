import { useState, useEffect } from 'react';

const useTodosState = () => {
	const [todos, setTodos] = useState(() => {
		return JSON.parse(localStorage.getItem('todos')) || [];
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return [todos, setTodos];
};

export default useTodosState;
