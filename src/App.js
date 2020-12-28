// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch >
          <Route path="/" exact component={Home}></Route>
          <Route path= "/about" exact component={About}/>
          <Route path="/blogs" exact component={Blogs}/>
          <Route 
            path="/blogs/:id" 
            render= {
              (props) => {
                console.log(props);
                return <Blog {...props}/>
              }
            }
          />
          {/* <Route path="/blogs/:id" exact component={Blog}/> */}
        </Switch>
      </div>
    </Router>

  );
}

export default App;
