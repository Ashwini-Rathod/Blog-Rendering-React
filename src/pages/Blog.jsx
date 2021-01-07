import { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import initFontAwesome from "../components/initFontAwesome";
import NotFound from "../components/NotFound";
import "./Blog.css";
const url = "https://blog-rendering.herokuapp.com/blogs/";

class Blog extends Component{
    constructor(props){
    super(props)
        this.state = {
            blog: [],
            status: "",
            relatedLinks: [],
        }
    }

    componentDidMount = () => {
        // console.log("props from component did mount", this.props);
        fetch(`${url}${this.props.match.params.id}`)
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

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps);
        console.log(prevState);
        return(
            console.log("msg")
        )
    }

    renderBlog(id){
        // this.setState({blog: [], relatedLinks: []});
        // this.props.history.push(`/blogs/${id}`);
        fetch(`${url}${id}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log("renderBlog props: ",this.props);//current id
            console.log(data.data);
            this.setState({blog: data.data ,relatedLinks: data.data.links})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        // console.log("these props from render: ",this.props.match.params.id);//currentlocation
        console.log("state: ", this.state.blog);
        initFontAwesome();
        return(
            <div>
                {
                    this.state.status === "Successful" ? 
                    (
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
                                    this.state.relatedLinks !== [] ? (
                                        this.state.relatedLinks.map((link)=>{
                                            return (
                                                <div  className="side-panel" id={link.id}>
                                                    <Link 
                                                    to={`/blogs/${link.id}`} 
                                                    id={link.id} className="create-link" 
                                                    onClick={()=>this.renderBlog(link.id)}>
                                                        {link.title}
                                                        <hr className="link-hr"/>
                                                    </Link>
                                                </div>
                                        )
                                    })
                                    ):
                                    (
                                        console.log("No related links")
                                    )
                                }
                            </div>
                        </div>
                        <Footer/>
                    </div>
                    ): 
                    (
                    <NotFound/>
                    )
                }
            </div>
        )
    }
}

export default Blog;