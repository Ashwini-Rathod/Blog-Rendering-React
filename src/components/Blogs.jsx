import {Component } from "react";
import {Link} from "react-router-dom";
import "./Blogs.css";

class Blogs extends Component{
    constructor(props){
        super(props);
        this.state={
            blogs: [],
        }

    }

    componentDidMount = () =>{
        fetch("http://localhost:5000/blogs")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            this.setState({blogs: data.data[0]});
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <div className="blog-container">
                {
                    this.state.blogs.map((blog)=>{
                        return(
                            <div className= "blog-card" key={blog.id}>
                                <div>
                                <Link to={`/blogs/${blog.id}`}>
                                     <img src= {blog.imageUrl} alt="Blog Banner" className="blog-image"></img>
                                </Link>
                                </div>
                                <div className="blog-card-content">
                                    <p>{blog.author}</p>
                                    <p>{blog.title}</p>
                                </div>
                              
                               
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Blogs;