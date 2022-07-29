import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { validateName, validateEmail, validatePassword, validateCredentials } from "../service/module";

import Logo from "../component/Logo";
import VisibilityIcon from "../icon/VisibilityIcon";

const auth = getAuth();

const createAccount = (email, password, firstName, lastName) => {
  const userName = {
    displayName: firstName + " " + lastName
  };

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => updateProfile(auth.currentUser, userName))
    .catch((error) => console.error(error));
}

const getCredentials = () => {
  try {
    const firstName = DOMPurify.sanitize(document.getElementById("first-name-signup").value);
    const lastName = DOMPurify.sanitize(document.getElementById("last-name-signup").value);
    const email = DOMPurify.sanitize(document.getElementById("email-sign-up").value);
    const password = DOMPurify.sanitize(document.getElementById("password-sign-up").value);
    const checkbox = DOMPurify.sanitize(document.getElementById("checkbox-signup").checked);

    const validName = validateName(firstName, lastName);
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);

    if (validateCredentials(validName, validEmail, validPassword, checkbox)) createAccount(email, password, firstName, lastName);  
  } catch (error) {
    console.error(error);
  }
}

const SignUp = () => {
  const navigate = useNavigate();

  onAuthStateChanged(getAuth(), (user) => {
    try {
      if (user) navigate("/logowanie");
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <article className="signup">
      <Logo />
      <form action="" method="" className="form">
        <input type="text" id="first-name-signup" className="input" placeholder="Imię" tabIndex="0" required/>
        <input type="text" id="last-name-signup" className="input" placeholder="Nazwisko" tabIndex="0" required/>
        <input type="email" id="email-sign-up" className="input" placeholder="Adres email" tabIndex="0" required/>
        <div className="input password-bar">
          <input type="password" id="password-sign-up" className="password-login" placeholder="Hasło" tabIndex="0" required /><VisibilityIcon />
        </div>
        <section className="confirmation">
          <span className="checkbox-container">
            <input type="checkbox" id="checkbox-signup" className="checkbox" tabIndex="0"/>
            <label htmlFor="checkbox-signup" className="checkbox-label">Akceptuję <Link to="/regulamin" className="link">regulamin</Link> i <Link to="/polityka-prywatnosci" className="link">politykę prywatności</Link> HOMIES.</label>
          </span>  
          <button className="button" type="button" tabIndex="0" onClick={getCredentials}>Utwórz konto</button>
        </section>
      </form>
    </article>
  );
}

export default SignUp;
