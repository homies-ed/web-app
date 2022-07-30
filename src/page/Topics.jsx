import BackIcon from "../icon/BackIcon";
import Menu from "../component/Menu";
import SmallTile from "../component/SmallTile";
import Novelist from "../icon/Novelist";
import Bibliophile from "../icon/Bibliophile";
import Mathematics from "../icon/Mathematics";

// mock data 
const displayTopics = (subject) => {
  try {
    let array = [];

    const polishTopics = ["Młoda Polska", "Średniowiecze", "Homer", "Horacy", "Jan Kochanowski"];
    const mathTopics = ["Funkcja liniowa", "Trygonometria", "Prawdopodobieństwo", "Zdarzenia losowe", "Równania i nierówności"];
    const englishTopics = ["Czasy przyszłe", "Konstrukcje warunkowe", "Strona bierna", "False friends", "Idiomy"];

    let source = [];
    switch(subject) {
      case "Język polski":
        source = [...polishTopics];
        localStorage.setItem("subject", "polish");
      break;

      case "Matematyka":
        source = [...mathTopics];
        localStorage.setItem("subject", "math");
      break;

      case "Język angielski":
        source = [...englishTopics];
        localStorage.setItem("subject", "english");
      break;
    }

    for (let i = 0; i < 5; i += 1) array[i] = <SmallTile name={source[i]} key={i} />;
    return array;
  } catch (error) {
    console.error(error);
  }
}

const Topics = (props) => {
  let illustration;

  switch (props.subject) {
    case "Język polski":
      illustration = <Novelist />;
    break;

    case "Język angielski":
      illustration = <Bibliophile />
    break;

    case "Matematyka":
      illustration = <Mathematics />
    break;
  }
  
  return (
    <article className="topics">
      <BackIcon class="back-zbieranina"/>
      <h1 className="topics-heading">{props.subject}</h1>
      {illustration}
      <section className="topic-list">
        {displayTopics(props.subject)}
      </section>
      <Menu />
    </article>
  );
}

export default Topics;
