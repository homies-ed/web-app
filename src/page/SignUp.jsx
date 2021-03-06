import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { validateName, validateEmail, validatePassword, validateCredentials, getErrorMessage, highlightInput } from "../service/module";

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

    const errorMessage = document.getElementById("error-message");
    const THREE_SECONDS_IN_MS = 3000;

    if (validateCredentials(validName, validEmail, validPassword, checkbox)) createAccount(email, password, firstName, lastName);
    else {
      errorMessage.innerHTML = getErrorMessage();
      highlightInput(validName, validEmail, validPassword, checkbox);
      setTimeout(() => errorMessage.innerHTML = "", THREE_SECONDS_IN_MS);
    }
  } catch (error) {
    console.error(error);
  }
}

const getAllInputs = () => {
  const inputs = document.querySelectorAll("input");
  console.log(inputs);
}

const SignUp = () => {
  getAllInputs();
  
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
        <input type="text" id="first-name-signup" className="input" placeholder="Imi??" tabIndex="0" required/>
        <input type="text" id="last-name-signup" className="input" placeholder="Nazwisko" tabIndex="0" required/>
        <input type="email" id="email-sign-up" className="input" placeholder="Adres email" tabIndex="0" required/>
        <div className="input password-bar">
          <input type="password" id="password-sign-up" className="password-login" placeholder="Has??o" tabIndex="0" required /><VisibilityIcon />
        </div>
        <span id="error-message" className="error-message-container"></span>
        <section className="confirmation">
          <span className="checkbox-container">
            <input type="checkbox" id="checkbox-signup" className="checkbox" tabIndex="0"/>
            <label htmlFor="checkbox-signup" className="checkbox-label">Akceptuj?? <Link to="/regulamin" className="link">regulamin</Link> i <Link to="/polityka-prywatnosci" className="link">polityk?? prywatno??ci</Link> HOMIES.</label> 
          </span>  
          <button className="button" type="button" tabIndex="0" onClick={getCredentials}>Utw??rz konto</button>
        </section>
      </form>
    </article>
  );
}

export default SignUp;
