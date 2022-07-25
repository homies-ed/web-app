import { getAuth } from "firebase/auth";

import Menu from "../component/Menu";
import Tile from "../component/Tile";
import SmallTile from "../component/SmallTile";

const displayTopics = (quantity) => {
	try {
		let array = [];
		for (let i = 0; i < quantity; i += 1) array[i] = <SmallTile name="Temat" key={i}/>;
		return array;
	} catch (error) {
		console.error(error);
	}
}

const displayTiles = () => {
	const subjects = ["Polski", "Matematyka", "Angielski"];
	const tiles = [];
	for(let i = 0; i < subjects.length; i += 1) {
		tiles[i] = <Tile name={subjects[i]} key={i} />;
	}
	return tiles;
}

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
				{displayTiles()}
			</article>
			<h2 className="tertiary-heading">Ostatnie lekcje</h2>
			{displayTopics(5)}
			<Menu />
		</article>
	);
}

export default Zbieranina;
