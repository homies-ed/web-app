import { Link } from "react-router-dom";

const SmallTile = (props) => {
    return (
        <Link to="/zagadnienie" className="link">
            <article className="small-tile">
                <span className="lesson-name">{props.name}</span>
            </article>
        </Link>
    );
}

export default SmallTile;
