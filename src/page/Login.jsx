import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import DOMPurify from "isomorphic-dompurify";

import Logo from "../component/Logo";
import VisibilityIcon from "../icon/VisibilityIcon";

const auth = getAuth();
auth.languageCode = "pl";

const highlightInput = (id) => {
	const input = document.getElementById(id);
	input.classList.add("input-error");

	const THREE_SECONDS_IN_MS = 3000;
	setTimeout(() => input.classList.remove("input-error"), THREE_SECONDS_IN_MS);
}

const handleErrors = (error) => {
	let errorMessage;

	switch (error.code) {
		case "auth/internal-error":
			errorMessage = "Nastąpił nieoczekiwany błąd.";	
			highlightInput("email-login");
			break;

		case "auth/invalid-email":
			errorMessage = "Podany adres email jest nieprawidłowy.";
			highlightInput("email-login");
			break;

		case "auth/user-not-found":
			errorMessage = "Nie znaleziono takiego użytkownika.";
			highlightInput("email-login");
			break;

		case "auth/invalid-password":
			highlightInput("password-login");
			errorMessage = "Podane hasło jest nieprawidłowe.";
			break;

		default:
			errorMessage = "Wystąpił nieoczekiwany błąd.";
	}

	const errorMessageContainer = document.getElementById("error-message");
	const THREE_SECONDS_IN_MS = 3000;

	errorMessageContainer.innerHTML = errorMessage;
	setTimeout(() => errorMessageContainer.innerHTML = "", THREE_SECONDS_IN_MS);
}

const emailLogin = () => {
	try {
		const email = DOMPurify.sanitize(document.getElementById("email-login").value);
		const password = DOMPurify.sanitize(document.getElementById("password-login").value);

		signInWithEmailAndPassword(auth, email, password)
			.catch(error => handleErrors(error));
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
					<span id="error-message" className="error-message-container"></span>
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
