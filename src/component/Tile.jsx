import { Link } from "react-router-dom";
import { latinise } from "../service/module";

const Tile = (props) => {
    const name = props.name.latinise().toLowerCase().trim().replaceAll(" ", "-");
    const link = "/zbieranina/" + name;

    return (
        <Link to={link} className="link scrolled-children">
            <section className="tile">
                <div className="subject-name">{props.name}</div>
            </section>
        </Link>
    );
}

export default Tile;
