import { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import NotFound from "../components/NotFound";
import "./Blog.css";
class LinkBlog extends Component{
    constructor(props){
    super(props)
        this.state = {
            blog: [],
            status: "",
            relatedLinks: [],
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:5000/blogs/${this.props.match.params.id}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data.data);
            this.setState({blog: data.data, status: data.status, relatedLinks: data.data.links});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
        // let relatedLinks = (this.state.blog.links);
        // console.log("Related Links",relatedLinks);
        // console.log("Blog Data: ",this.state.blog)
        return(
            <div>
                {
                    this.state.status === "Successful" ? (
                        <div>
                                            <Nav/>
                        <div className="blog-elements">
                        <div className="blog-content">
                            <h1>{this.state.blog.title}</h1>
                            <img src={this.state.blog.imageUrl} alt="Blog Banner"/>
                            <p>{this.state.blog.content}</p>
                        </div>
                        <div className="sticky-panel">
                            <h1>Related Links</h1>
                            {
                                this.state.relatedLinks ? (
                                    this.state.relatedLinks.map((link)=>{
                                        return (
                                            <div className="side-panel">
                                            <Link to={`/blogs/${link.id}`} className="create-link">
                                                {link.title}
                                                <hr className="link-hr"/>
                                            </Link>
                                            </div>
                                        )
                                    })
                                ): (
                                    console.log("No Related Links")
                                )
                            }
        
                        </div>
                    </div>
                    </div>
                    ):
                    <NotFound/>
                }

            </div>

        )
    }
}

export default LinkBlog;