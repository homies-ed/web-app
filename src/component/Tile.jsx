import { Link } from "react-router-dom";
import { latinise } from "../service/module";

import Novelist from '../icon/Novelist';
import Mathematics from '../icon/Mathematics';
import Bibliophile from '../icon/Bibliophile';

const Tile = (props) => {
    const name = props.name.latinise().toLowerCase().trim().replaceAll(" ", "-");
    const link = "/zbieranina/" + name;

    let illustration;

    switch (props.name) {
        case "Polski":
            illustration = <Novelist imageSize="small" />;
        break;

        case "Angielski":
            illustration = <Bibliophile imageSize="small" />
        break;

        case "Matematyka":
            illustration = <Mathematics imageSize="small" />
        break;
    }

    return (
        <Link to={link} className="link scrolled-children">
            <section className="tile">
                {illustration}
                <div className="subject-name">{props.name}</div>
            </section>
        </Link>
    );
}

export default Tile;
