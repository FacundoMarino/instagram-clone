import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	const inputHandler = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const resetHandler = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		inputHandler,
		resetHandler,
	};
};
