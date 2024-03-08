/* eslint-disable no-undef */
import { renderHook, act } from '@testing-library/react';
import useTodosState from '../hooks/useTodosState';

describe('useTodosState', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	test('devuelve el estado inicial de los todos desde localStorage', () => {
		const { result } = renderHook(() => useTodosState());
		expect(result.current[0]).toEqual([]);
	});

	test('actualiza localStorage cuando cambia el estado de los todos', () => {
		const { result } = renderHook(() => useTodosState());
		const newTodos = [{ text: 'Nuevo Todo', isComplete: false }];

		act(() => {
			result.current[1](newTodos);
		});

		expect(JSON.parse(localStorage.getItem('todos'))).toEqual(newTodos);
	});
});
