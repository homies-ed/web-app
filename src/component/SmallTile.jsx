import { Link } from "react-router-dom";
import NextIcon from "../icon/NextIcon";

const SmallTile = (props) => {
    return (
        <Link to="/zagadnienie" className="link">
            <article className="small-tile">
                <span className="lesson-name">{props.name}</span>
                <NextIcon />
            </article>
        </Link>
    );
}

export default SmallTile;
