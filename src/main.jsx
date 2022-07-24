import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Start from "./page/Start";
import Zbieranina from "./page/Zbieranina";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Privacy from "./page/Privacy";
import Terms from "./page/Terms";
import Settings from "./page/Settings";
import Planer from "./page/Planer";
import Topics from "./page/Topics";
import Documents from "./page/Documents";

import reportWebVitals from "./reportWebVitals";
import "./style/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/start" element={<Start />} />
      <Route path="/logowanie" element={<Login />} />
      <Route path="/rejestracja" element={<SignUp />} />
      <Route path="/zagadnienie" element={<Documents />} />
      <Route path="/planer" element={<Planer />} />
      <Route path="/ustawienia" element={<Settings />} />
      <Route path="/regulamin" element={<Terms />} />
      <Route path="/polityka-prywatnosci" element={<Privacy />} />
      <Route path="/zbieranina" element={<Zbieranina />} />
      <Route path="/zbieranina/polski" element={<Topics subject="Język polski" />} />
      <Route path="/zbieranina/angielski" element={<Topics subject="Język angielski" />} />
      <Route path="/zbieranina/matematyka" element={<Topics subject="Matematyka" />} />
    </Routes>
  </Router>
);

reportWebVitals();
