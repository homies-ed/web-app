import { getAuth } from "firebase/auth";

import Menu from "../component/Menu";
import Tile from "../component/Tile";
import SmallTile from "../component/SmallTile";

const rejectAccess = () => !getAuth().currentUser ? console.warn("Zaloguj się, aby uzyskać uprawniony dostęp do Zbieraniny") : console.log();

const Zbieranina = () => {
	rejectAccess();

	return (
		<article className="zbieranina">
			<h1 className="secondary-heading zbieranina-heading" tabIndex="0">
				<span className="greeting">Cześć, </span>
				<span className="name">Laura!</span> <br/>
				<span className="subheading">Czego chcesz się dzisiaj nauczyć?</span>
			</h1>
			<h2 className="tertiary-heading">Przedmioty</h2>
			<article className="subject-tiles">
				<Tile name="Polski" />
				<Tile name="Matematyka" />
				<Tile name="Angielski" />
			</article>
			<h2 className="tertiary-heading">Ostatnie lekcje</h2>
				<SmallTile name="Młoda Polska" />
				<SmallTile name="Funkcja wielomianowa" />
				<SmallTile name="Czasy przeszłe" />
				<SmallTile name="Stanisław Wyspiański" />
				<SmallTile name="Trygonometria" />
			<Menu />
		</article>
	);
}

export default Zbieranina;
