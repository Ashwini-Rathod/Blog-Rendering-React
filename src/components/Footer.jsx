import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from "./Footer.module.css";
import {Component} from "react";

class Footer extends Component{
    render(){
    return (
        <footer>
            <div className={style["footer-heading"]}>
                <p>Follow us on social media to know more about us</p>
            </div>
            <div className={style["icons"]}>
                <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className={style["facebook-icon"]}
                />
                <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className={style["twitter-icon"]}
                />
                <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className={style["linkedin-icon"]}
                />
            </div>

        </footer>
    )
    }
}

export default Footer;