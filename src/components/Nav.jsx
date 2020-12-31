import {Link} from "react-router-dom";
import "./Nav.css";

function Nav (){
    return (
        <nav className="nav-container">
            <h2 className="nav-logo">Blogs.com</h2>
            <ul className="nav-ul">
                <Link to="/" className="link-home">
                 <li  className="nav-links">Home</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;