import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import logo from '../assets/instagram-logo.png';
import './index.css';

export const SignUp = () => {
	const { email, password, fullname, username, inputHandler, formState } =
		useForm();

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
	};

	return (
		<div className='signup'>
			<form action='submit' className='container'>
				<img className='signup-img' src={logo} alt='instagram-logo' />
				<div>
					<h2 className='signup-h2'>
						Regístrate para ver fotos y vídeos de tus amigos.
					</h2>
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
						name='fullname'
						placeholder='Full Name'
						value={fullname}
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
				<span className='signup-p'>
					Al registrarte, aceptas nuestras Condiciones,
					<br />
					nuestra Política de privacidad y nuestra <br /> Política de cookies.
				</span>
				<button className='submit' onClick={onSubmit}>
					SIGN UP
				</button>
				<span>
					¿Ya tenes cuenta? Hace click <Link to='/signin'>aquí</Link>
				</span>
			</form>
		</div>
	);
};
