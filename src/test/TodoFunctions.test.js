/* eslint-disable no-undef */
import {
	validateTodo,
	addTodo,
	deleteTodo,
	toggleComplete,
} from '../utils/TodoFunctions';

describe('TodoFunctions', () => {
	test('validateTodo devuelve true si el texto no es vacio', () => {
		expect(validateTodo('algún texto')).toBe(true);
	});

	test('validateTodo devuelve false si el texto es vacio', () => {
		expect(validateTodo('')).toBe(false);
	});

	test('addTodo agrega un nuevo todo a la lista', () => {
		const todos = [];
		const setTodos = jest.fn();
		const setTodoText = jest.fn();

		addTodo(todos, 'Nuevo Todo', setTodos, setTodoText);

		expect(setTodos).toHaveBeenCalledWith([
			{ text: 'Nuevo Todo', isComplete: false },
		]);
		expect(setTodoText).toHaveBeenCalledWith('');
	});

	test('deleteTodo elimina un todo de la lista', () => {
		const todos = [
			{ text: 'Todo 1', isComplete: false },
			{ text: 'Todo 2', isComplete: false },
		];
		const setTodos = jest.fn();

		deleteTodo(todos, 1, setTodos);

		expect(setTodos).toHaveBeenCalledWith([
			{ text: 'Todo 1', isComplete: false },
		]);
	});

	test('toggleComplete alterna la propiedad isComplete de un todo', () => {
		const todos = [
			{ text: 'Todo 1', isComplete: false },
			{ text: 'Todo 2', isComplete: false },
		];
		const setTodos = jest.fn();

		toggleComplete(todos, 0, setTodos);

		expect(setTodos).toHaveBeenCalledWith([
			{ text: 'Todo 1', isComplete: true },
			{ text: 'Todo 2', isComplete: false },
		]);
	});
});
