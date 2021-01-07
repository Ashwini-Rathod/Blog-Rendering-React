import {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import NotFound from "../components/NotFound";

class Router extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch >
                    <Route path="/" exact component={Blogs}/>
                    <Route 
                        path="/blogs/:id" 
                        render= {
                        (props) => {
                            return <Blog {...props}/>
                        }
                        }
                    />
                    <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router;