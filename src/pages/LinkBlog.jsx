import { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import initFontAwesome from "../components/initFontAwesome";
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
            this.setState({blog: data.data, status: data.status, relatedLinks: data.data.links});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
        initFontAwesome();
        return(
            <div>
                {
                    this.state.status === "Successful" ? (
                        <div>
                        <Nav/>
                        <div className="blog-elements">
                            <div className="blog-content">
                                <h1 className="blog-title">{this.state.blog.title}</h1>
                                <img src={this.state.blog.imageUrl} alt="Blog Banner" className="blog-image"/>
                                <p className="blog-description">{this.state.blog.content}</p>
                            </div>
                            <div className="sticky-panel">
                                <h1 className="related-links">Related Links</h1>
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
                        <Footer/>
                    </div>
                    ):
                    <NotFound/>
                }

            </div>

        )
    }
}

export default LinkBlog;