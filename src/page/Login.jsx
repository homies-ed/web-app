import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import Logo from '../component/Logo';
import PasswordInput from '../component/PasswordInput';

const auth = getAuth();
auth.languageCode = 'pl';

const emailLogin = () => {
	const email = document.getElementById('email-login').value;
	const password = document.getElementById('password-login').value;
	signInWithEmailAndPassword(auth, email, password);
}

const Login = () => {
	const navigate = useNavigate();

	onAuthStateChanged(auth, (user) => {
		if (user) navigate('/zbieranina');
	});

	return (
		<React.Fragment>
			<article className='login'>
				<Logo />
				<form action='' method='' className='form'>
					<input type='email' id='email-login' className='input' placeholder='Adres email' tabIndex='0' required />
					<div className='password-input'>
						<PasswordInput />
						<p className='password-tooltip' tabIndex='0'><Link to='/odzyskaj-haslo' className='link tooltip'>Nie pamiętasz hasła?</Link></p>
					</div>
					<input type='button' value='Zaloguj się' id='button-login' className='button login-button link' required />
				</form>
			</article>
			<section className='alt-login'>
				<footer>
					<hr className='break' />
					<p className='help-message'>Nie masz konta? &nbsp;<span className='signup-link'><Link to='/rejestracja' className='link signup-link'>Zarejestruj się</Link></span></p>
				</footer>
			</section>
		</React.Fragment>
	);
}

export default Login;
