/* eslint-disable no-undef */
import { render, fireEvent, screen } from '@testing-library/react';
import TodosComponents from '../components/TodosComponents';

describe('TodosComponents', () => {
	it('renderiza TodosComponents correctamente', () => {
		render(<TodosComponents />);
		expect(screen.getByText('To-Do List')).toBeInTheDocument();
	});

	it('agrega un nuevo todo cuando se hace clic en el boton agregar', () => {
		render(<TodosComponents />);

		fireEvent.change(screen.getByPlaceholderText('Escribe tu nuevo todo'), {
			target: { value: 'Test Todo' },
		});

		fireEvent.click(screen.getByText('Add'));

		expect(screen.getByText('Test Todo')).toBeInTheDocument();
	});

	it('elimina un todo cuando se hace clic en el boton de eliminar', () => {
		render(<TodosComponents />);

		fireEvent.click(screen.getByText('Add'));
		fireEvent.click(screen.getAllByText('X')[0]);

		expect(screen.queryByText('Test Todo')).toBeNull();
	});
});
