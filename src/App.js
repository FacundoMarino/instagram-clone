import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './instagram-clone/views/Navbar';
import { Home } from './instagram-clone';
import { SignIn, SignUp } from './auth';

export const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/signin' element={<SignIn />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
