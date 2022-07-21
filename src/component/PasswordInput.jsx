import VisibilityIcon from "../icon/VisibilityIcon";

const PasswordInput = () => {
  return (
    <div className="input password-bar">
      <input type="password" id="password-login" className="password-login" placeholder="Hasło" tabIndex="0" required /><VisibilityIcon />
    </div>
  );
}

export default PasswordInput;
