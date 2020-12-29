import {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import Home from "../components/Home";
import Nav from "../components/Nav";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Blog from "../components/Blog";
import LinkBlog from "../components/LinkBlog";

class Router extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Nav/>
                    <Switch >
                    {/* <Route path="/" exact component={Home}></Route> */}
                    <Route path= "/about" exact component={About}/>
                    <Route path="/" exact component={Blogs}/>
                    <Route 
                        path="/blogs/:id" 
                        render= {
                        (props) => {
                            console.log(props);
                            return <Blog {...props}/>
                        }
                        }
                    />
                    <Route 
                        path="/links/:id" 
                        render= {
                        (props) => {
                            console.log(props);
                            return <LinkBlog {...props}/>
                        }
                        }
                    />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router;