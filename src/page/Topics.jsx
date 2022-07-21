import BackIcon from "../icon/BackIcon";
import MockImage from "../component/MockImage";
import Menu from "../component/Menu";
import SmallTile from "../component/SmallTile";

const displayTopics = (quantity) => {
  try {
    let array = [];
    for (let i = 0; i < quantity; i += 1) array[i] = <SmallTile name="Temat" key={i} />;
    return array;
  } catch (error) {
    console.error(error);
  }
}

const Topics = (props) => {
  return (
    <article className="topics">
      <BackIcon class="back-zbieranina"/>
      <h1 className="topics-heading">{props.subject}</h1>
      <MockImage size="325/250" class="topics-image"/>
      <h2 className="tertiary-heading">Działy</h2>
      {displayTopics(5)}      
      <Menu />
    </article>
  );
}

export default Topics;
