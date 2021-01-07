import {Link} from "react-router-dom";
import style from "./Nav.module.css";

function Nav (){
    return (
        <nav className={style["nav-container"]}>
            <h2 className={style["nav-logo"]}>Blogs.com</h2>
            <ul className={style["nav-ul"]}>
                <Link to="/" className={style["link-home"]}>
                 <li  className={style["nav-links"]}>Home</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;