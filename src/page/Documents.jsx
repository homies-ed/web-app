import Menu from "../component/Menu";
import Document from "../component/Document";
import BackIcon from "../icon/BackIcon";

const displayTopics = (subject) => {
    try {
        let array = [];

        const polishTopics = ["Młoda Polska", "Średniowiecze", "Homer", "Horacy", "Jan Kochanowski", "Zbrodnia i kara"];
        const mathTopics = ["Funkcja liniowa", "Trygonometria", "Rachunek prawdopodobieństwa", "Zdarzenia losowe", "Równania i nierówności", "Logika"];
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

        for (let i = 0; i < 6; i += 1) array[i] = <Document name={source[i]} key={i} tags={tags[i]}/>;
        return array;
    } catch (error) {
        console.error(error);
    }
}

const Documents = (props) => {
    return (
        <section className="documents">
            <BackIcon class="back-zbieranina" />
            <h1 className="documents-heading">Temat</h1>
            <section className="documents-container">
                {displayTopics("Język polski")}
            </section>
            <Menu />
        </section>
    );
}

export default Documents;
