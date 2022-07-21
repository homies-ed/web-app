import { getAuth } from "firebase/auth";

import Menu from "../component/Menu";
import BackIcon from "../icon/BackIcon";
import Option from "../component/Option";

const rejectAccess = () => !getAuth().currentUser ? console.warn("Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny") : console.log();

const Settings = () => {
  rejectAccess();
  
  return (
    <article className="settings">
      <BackIcon class="back-settings"/>
      <h1 className="settings-heading">Ustawienia</h1>
      <h3 className="options-heading">Ustawienia konta</h3>
      <Option type="profile"/>
      <h3 className="options-heading">Inne ustawienia</h3>
      <Option />
      <Option />
      <Option />
      <Option />
      <Menu />
    </article>
  );
}

export default Settings;
