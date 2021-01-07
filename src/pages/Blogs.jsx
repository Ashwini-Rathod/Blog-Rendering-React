import {Component } from "react";
import {Link} from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import initFontAwesome from "../components/initFontAwesome";
import "./Blogs.css";
const url = "https://blog-rendering.herokuapp.com/blogs";

class Blogs extends Component{
    constructor(props){
        super(props);
        this.state={
            blogs: [],
            status: "",
        }

    }

    componentDidMount = () =>{
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            this.setState({blogs: data.data[0], status: data.status});
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        console.log(this.state.status);
        initFontAwesome();
        return (
            <div>
                {
                    this.state.status === "" ? 
                    (
                        <h1>Loading</h1>
                    ) :
                    (
                        <div>
                            <Nav/>
                            <div className="blog-container">
                            {
                                this.state.blogs.map((blog)=>{
                                    return(
                                        <div className= "blog-card" key={blog.id}>
                                            <div>
                                            <Link to={`/blogs/${blog.id}`}>
                                                <img src= {blog.imageUrl} alt="Blog Banner" className="blog-image-tiles"></img>
                                            </Link>
                                            </div>
                                            <div className="blog-card-content">
                                                <h3 className="blog-author">{blog.author}</h3>
                                                <h3 className="blog-title">{blog.title}</h3>
                                            </div>  
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <Footer/>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Blogs;