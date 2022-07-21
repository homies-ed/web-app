import Menu from "../component/Menu";
import Document from "../component/Document";
import SearchBar from "../component/SearchBar";
import BackIcon from "../icon/BackIcon";

const Documents = () => {
    return (
        <section className="documents">
            <BackIcon class="back-zbieranina" />
            <h1 className="documents-heading">Temat</h1>
            <SearchBar />
            <section className="documents-container">
                <Document name="Materiał" tags="notatka, do 10 minut" />
                <Document name="Materiał" tags="artykuł, do 20 minut" />
                <Document name="Materiał" tags="podkast, do 60 minut" />
                <Document name="Materiał" tags="podkast, do 90 minut" />
                <Document name="Materiał" tags="notatka, do 30 minut" />
                <Document name="Materiał" tags="film, do 180 minut" />
                <Document name="Materiał" tags="serial, do 360 minut" />
            </section>
            <Menu />
        </section>
    );
}

export default Documents;
