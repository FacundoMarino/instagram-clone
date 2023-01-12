import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/instagram-logo.png';

export const Navbar = () => {
	return (
		<div className='navbar'>
			<img className='logo' src={logo} alt='logo-instagram' />

			<ul className='nav-menu'>
				<Link to='/signup'>
					<li>SignUp</li>
				</Link>
				<Link to='/signin'>
					<li>SignIn</li>
				</Link>
				<Link to='/'>
					<li>Profile</li>
				</Link>
			</ul>
		</div>
	);
};
