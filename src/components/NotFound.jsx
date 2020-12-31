import "./NotFound.css";
import {Link } from "react-router-dom";
function NotFound(){
    return(
        <div className="not-found-container">
            <h1>Sorry!</h1>
            <h2>Page not found</h2>
            <Link to="/">
                <button>Go back to Home</button>
            </Link>
        </div>
    )
}

export default NotFound;