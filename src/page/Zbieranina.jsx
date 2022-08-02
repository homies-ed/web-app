import { getAuth } from "firebase/auth";
import Menu from "../component/Menu";
import Tile from "../component/Tile";
import SmallTile from "../component/SmallTile";
import ErrorModal from "../component/ErrorModal";

localStorage.setItem("subject", "math");

const rejectAccess = () => {
	try {
		if (getAuth().currentUser) return false;
		else return true;
	} catch (error) {
		console.error(error);
	}
}

const getUserName = () => {
	try {
		if (getAuth().currentUser.displayName) return <><span className="greeting">Cześć, </span><span className="name">{getAuth().currentUser.displayName}!</span> <br /></>;
	} catch (error) {
		console.error(error);
	}
}

// mock data 
const getSubject = () => {
	try {
		const subject = localStorage.getItem("subject");

		switch (subject) {
			case "polish":
				return "Język polski";

			case "math":
				return "Matematyka";

			case "english":
				return "Język angielski";
		}
	} catch (error) {
		console.error(errror);
	}
}

// mock data 
const displayTopics = (subject) => {
	try {
		let array = [];

		const polishTopics = ["Młoda Polska", "Średniowiecze", "Homer", "Horacy", "Jan Kochanowski", "Zbrodnia i kara"];
		const mathTopics = ["Funkcja liniowa", "Trygonometria", "Prawdopodobieństwo", "Zdarzenia losowe", "Równania i nierówności", "Logika"];
		const englishTopics = ["Czasy przyszłe", "Konstrukcje warunkowe", "Strona bierna", "False friends", "Idiomy", "Poprawna wymowa"];
		const tags = ["notatka, do 10 minut", "artykuł, do 20 minut", "podcast, do 90 minut", "notatka, do 30 minut", "film, do 180 minut", "serial, do 360 minut"];

		let source = [];
		switch (subject) {
			case "Język polski":
				source = [...polishTopics];
				break;

			case "Matematyka":
				source = [...mathTopics];
				break;

			case "Język angielski":
				source = [...englishTopics];
				break;
		}

		for (let i = 0; i < 6; i += 1) array[i] = <SmallTile name={source[i]} key={i} tags={tags[i]} />;
		return array;
	} catch (error) {
		console.error(error);
	}
}

const Zbieranina = () => {
	return (
		<> { rejectAccess() ? <ErrorModal /> : 
			<article className="zbieranina">
				<h1 className="secondary-heading zbieranina-heading" tabIndex="0">
					{getUserName()}
					<span className="subheading">Czego chcesz się dzisiaj nauczyć?</span>
				</h1>
				<h2 className="tertiary-heading">Przedmioty</h2>
				<article className="subject-tiles">
					<Tile name="Polski" />
					<Tile name="Matematyka" />
					<Tile name="Angielski" />
				</article>
				<h2 className="tertiary-heading">Zagadnienia z ostatniego przedmiotu</h2>
				{displayTopics(getSubject())}
				<Menu />
			</article>
		} </>
	);
}

export default Zbieranina;
