import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import footerstyle from "./Footer.module.css";
import {Component} from "react";

class Footer extends Component{
    render(){
    return (
        <footer>
            <div className={footerstyle["footer-heading"]}>
                <h2>Follow us on social media to know more about us</h2>
            </div>
            <div className={footerstyle["icons"]}>
                <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className={footerstyle["facebook-icon"]}
                />
                <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className={footerstyle["twitter-icon"]}
                />
                <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className={footerstyle["linkedin-icon"]}
                />
            </div>

        </footer>
    )
    }
}

export default Footer;