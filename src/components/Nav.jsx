import {Link} from "react-router-dom";
import "./Nav.css";
function Nav (){
    return (
        <nav className="nav-container">
            <h3>Blogs.com</h3>
            <ul>
                <Link to="/">
                 <li  className="nav-links">Home</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;