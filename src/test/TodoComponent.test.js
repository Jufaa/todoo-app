/* eslint-disable no-undef */
import { render, fireEvent, screen } from '@testing-library/react';
import TodoComponent from '../components/TodoComponent';

describe('TodoComponent', () => {
	it('renderiza TodoComponent correctamente', () => {
		const mockTodo = 'Test Todo';
		render(
			<TodoComponent
				todo={mockTodo}
				onDelete={() => {}}
				onToggleComplete={() => {}}
				isComplete={false}
			/>,
		);
		expect(screen.getByText(mockTodo)).toBeInTheDocument();
	});

	it('llama a onDelete cuando se hace clic en el boton de eliminar', () => {
		const mockDelete = jest.fn();
		render(
			<TodoComponent
				todo='Test Todo'
				onDelete={mockDelete}
				onToggleComplete={() => {}}
				isComplete={false}
			/>,
		);

		fireEvent.click(screen.getByText('X'));
		expect(mockDelete).toHaveBeenCalled();
	});

	it('llama a onToggleComplete cuando se hace clic en el checkbox', () => {
		const mockToggleComplete = jest.fn();
		render(
			<TodoComponent
				todo='Test Todo'
				onDelete={() => {}}
				onToggleComplete={mockToggleComplete}
				isComplete={false}
			/>,
		);

		fireEvent.click(screen.getByRole('checkbox'));

		expect(mockToggleComplete).toHaveBeenCalled();
	});
});
