import { useState } from 'react';
import TodoComponent from './TodoComponent';
import {
	addTodo,
	deleteTodo,
	toggleComplete,
	validateTodo,
} from '../utils/TodoFunctions';
import useTodosState from '../hooks/useTodosState';

const TodosComponents = () => {
	const [todos, setTodos] = useTodosState();
	const [todoText, setTodoText] = useState('');
	const handleAddTodo = e => {
		e.preventDefault();
		if (validateTodo(todoText)) {
			addTodo(todos, todoText, setTodos, setTodoText);
		}
	};

	const handleDeleteTodo = index => {
		deleteTodo(todos, index, setTodos);
	};

	const handleToggleComplete = index => {
		toggleComplete(todos, index, setTodos);
	};

	return (
		<div className='max-w-md mx-auto bg-gray shadow-lg rounded-lg overflow-hidden mt-16 flex flex-col place-items-center'>
			<div className='bg-teal-500 text-white py-2 px-4'>
				<h1 className='text-2xl font-bold'>To-Do List</h1>
			</div>
			<form className='w-full max-w-sm mx-auto px-4 py-2'>
				<div className='flex items-center border-b-2 border-teal-500 py-2'>
					<input
						type='text'
						className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
						value={todoText}
						onChange={e => setTodoText(e.target.value)}
						placeholder='Escribe tu nuevo todo'
					/>
					<button
						className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
						type='submit'
						onClick={handleAddTodo}
					>
						Add
					</button>
				</div>
			</form>
			<div>
				{todos.map((todo, index) => (
					<TodoComponent
						key={index}
						todo={todo.text}
						isComplete={todo.isComplete}
						onDelete={() => handleDeleteTodo(index)}
						onToggleComplete={() => handleToggleComplete(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default TodosComponents;
