import { getAuth } from "firebase/auth";
import NextIcon from "../icon/NextIcon";

const auth = getAuth();

const setProfilePicture = (type, ) => {
    try {
        let source = type === "profile" ? auth.currentUser.photoURL : "https://color-hex.org/colors/a2d2ff.png";
        const id = auth.currentUser.uid;
        if (auth.currentUser.photoURL === null && type === "profile") source = "https://robohash.org/" + id;
        return source;
    } catch (error) {
        console.error(error);
    }
}

const Option = (props) => {

    return (
        <section className="option" tabIndex="0">
            <img src={setProfilePicture(props.type)} alt="" className="profile-picture" />
            <span className="option-description">Ustawienie</span>
            <NextIcon />
        </section>
    );
}

export default Option;
