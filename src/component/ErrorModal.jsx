import { Link } from "react-router-dom";

import Logo from "./Logo";

const ErrorModal = () => {
  return (
    <section className="start">
        <Logo />
        <span className="error-message">Zaloguj się, aby skorzystać ze Zbieraniny</span>
        <Link to="/logowanie">
            <input type="button" value="Kliknij tutaj" className="error-button button link" />
        </Link>
    </section>
  );
}

export default ErrorModal;
