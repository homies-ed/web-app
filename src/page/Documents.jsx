import Menu from "../component/Menu";
import Document from "../component/Document";
import BackIcon from "../icon/BackIcon";

// mock data
const displayMaterials = (subject) => {
    try {
        const lessonName = localStorage.getItem("lesson");
        let array = [];

        const polishTopics = [lessonName + " notatka", lessonName + " w kanonie lektur", lessonName + " w popkulturze", lessonName + " i historia"];
        const mathTopics = [lessonName + " zadania", lessonName + " objaśnienia", lessonName + " - jak to zrozumieć?", lessonName + " przykłady"];
        const englishTopics = [lessonName + " w pigułce", lessonName + " przykłady", lessonName + " fiszki", lessonName + " prostym językiem"];
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

        for (let i = 0; i < polishTopics.length; i += 1) array[i] = <Document name={source[i]} key={i} tags={tags[i]}/>;
        return array;
    } catch (error) {
        console.error(error);
    }
}

const getSubject = () => {
    const subject = localStorage.getItem("subject");
    
    switch(subject) {
        case "polish": 
            return "Język polski";

        case "math":
            return "Matematyka";

        case "english":
            return "Język angielski";
    }
}

const Documents = (props) => {
    return (
        <section className="documents">
            <BackIcon class="back-zbieranina" />
            <h1 className="documents-heading">{localStorage.getItem("lesson")}</h1>
            <section className="documents-container">
                {displayMaterials(getSubject())}
            </section>
            <Menu />
        </section>
    );
}

export default Documents;
