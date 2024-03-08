// eslint-disable-next-line react/prop-types
const TodoComponent = ({ todo, onDelete, onToggleComplete, isComplete }) => {
	const handleDelete = () => {
		onDelete();
	};

	const handleToggleComplete = () => {
		onToggleComplete();
	};

	return (
		<div className='flex items-center justify-between py-2 px-4 border-b border-gray-300'>
			<div className='flex items-center'>
				<label className='flex items-center'>
					<input
						type='checkbox'
						id={`checkbox-${todo}`}
						checked={isComplete}
						onChange={handleToggleComplete}
						className='form-checkbox h-6 w-6 text-teal-500'
					/>
					<span
						className={`ml-3 ${
							isComplete ? 'line-through text-gray-500' : 'text-gray-700'
						}`}
					>
						{todo}
					</span>
				</label>
			</div>
			<button
				onClick={handleDelete}
				className='text-red-500 hover:text-red-700 focus:outline-none ml-4'
			>
				X
			</button>
		</div>
	);
};

export default TodoComponent;
