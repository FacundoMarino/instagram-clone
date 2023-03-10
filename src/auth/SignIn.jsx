import { Link } from 'react-router-dom';
import logo from '../assets/instagram-logo.png';
import { useForm } from '../hooks/useForm';
import './index.css';

export const SignIn = () => {
	const { email, password, username, inputHandler, formState } = useForm();

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
	};
	return (
		<div className='signup'>
			<form action='submit' className='container'>
				<img className='signup-img' src={logo} alt='instagram-logo' />
				<div>
					<input
						type='email'
						className='form-input'
						name='email	'
						placeholder='Email'
						value={email}
						onChange={inputHandler}
					/>
				</div>

				<div>
					<input
						type='text'
						className='form-input'
						name='username'
						placeholder='User Name'
						value={username}
						onChange={inputHandler}
					/>
				</div>
				<div>
					<input
						type='password'
						className='form-input'
						name='password'
						placeholder='Password'
						value={password}
						onChange={inputHandler}
					/>
				</div>

				<button className='submit' onClick={onSubmit}>
					SIGN IN
				</button>
				<span>
					¿Querés crear una cuenta? Hace click <Link to='/signin'>aquí</Link>
				</span>
			</form>
		</div>
	);
};
