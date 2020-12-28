import {Component } from "react";
import {Link} from "react-router-dom";

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
                <h1>Blogs</h1>
                {
                    this.state.blogs.map((blog)=>{
                        return(
                            <div className= "blog-card" key={blog.id}>
                                <img src= {blog.imageUrl} alt="Blog Banner" className="blog-image"></img>
                                <p>{blog.author}</p>
                                <Link to={`/blogs/${blog.id}`}>
                                    <p>{blog.title}</p>
                                </Link>
                               
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Blogs;