import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import DOMPurify from "dompurify";

import Logo from "../component/Logo";
import VisibilityIcon from "../icon/VisibilityIcon";

const auth = getAuth();
auth.languageCode = "pl";

const emailLogin = () => {
	try {
		const email = DOMPurify.sanizite(document.getElementById("email-login").value);
		const password = DOMPurify.sanizite(document.getElementById("password-login").value);
		signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.error(error);
	}
}

const Login = () => {
	const navigate = useNavigate();

	onAuthStateChanged(auth, (user) => {
		try {
			if (user) navigate("/zbieranina");
		} catch (error) {
			console.error(error);
		}
	});

	return (
		<React.Fragment>
			<article className="login">
				<Logo />
				<form action="" method="" className="form">
					<input type="email" id="email-login" className="input" placeholder="Adres email" tabIndex="0" required />
					<div className="input password-bar">
						<input type="password" id="password-login" className="password-login" placeholder="Hasło" tabIndex="0" required /><VisibilityIcon />
					</div>
					<input type="button" value="Zaloguj się" id="button-login" className="button login-button link" required onClick={emailLogin}/>
				</form>
			</article>
			<section className="alt-login">
				<footer>
					<hr className="break" />
					<p className="help-message">Nie masz konta? &nbsp;<span className="signup-link"><Link to="/rejestracja" className="link signup-link">Zarejestruj się</Link></span></p>
				</footer>
			</section>
		</React.Fragment>
	);
}

export default Login;
