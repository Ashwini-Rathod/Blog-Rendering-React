import { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import initFontAwesome from "../components/initFontAwesome";
import NotFound from "../components/NotFound";
import styles from  "./Blog.module.css";
import Spinner from "react-bootstrap/Spinner";
const url = "https://blog-rendering.herokuapp.com/blogs/";

class Blog extends Component{
    constructor(props){
    super(props)
        this.state = {
            blog: [],
            status: "",
        }
    }

    componentDidMount = () => {
        fetch(`${url}${this.props.match.params.id}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            if(data === undefined){
                return new Error("Invalid Url");
            }
            else{
                this.setState({blog: data.data, status: data.status});
            }    
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    componentDidUpdate = () =>{
        if(this.state.blog !== undefined){
            if(this.state.blog.id !== this.props.match.params.id){
                fetch(`${url}${this.props.match.params.id}`)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    this.setState({blog: data.data, status: data.status})
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        } 
    }

    renderBlog(id){
        fetch(`${url}${id}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            this.setState({blog: data.data , status: data.status})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        initFontAwesome();
        return(
            <div>
                {
                    this.state.status === "" ? 
                    (
                        <div className={styles["loading"]}>   
                            <Spinner animation="grow" variant="primary" size="sm" className={styles["loading-spinner"]} />
                            <Spinner animation="grow" variant="success" size="sm" className={styles["loading-spinner"]}/>
                            <Spinner animation="grow" variant="danger" size="sm" className={styles["loading-spinner"]}/>
                      </div>
                    ) :
                    (
                        this.state.status === "Successful" ?
                        (
                            <div>
                            <Nav/>
                            <div className={styles["blog-elements"]}>
                                <div className={styles["blog-content"]}>
                                    <h1 className={styles["blog-title"]}>{this.state.blog.title}</h1>
                                    <img src={this.state.blog.imageUrl} alt="Blog Banner" className={styles["blog-image"]}/>
                                    <p className={styles["blog-description"]}>{this.state.blog.content}</p>
                                </div>
                                <div className={styles["sticky-panel"]}>
                                    <h1 className={styles["related-links"]}>Related Links</h1>
                                    {
                                        this.state.blog.links !== [] ? (
                                            this.state.blog.links.map((link, i)=>{
                                                return (
                                                    <div  className={styles["side-panel"]} key={`${link.id}${i}`}>
                                                        <Link 
                                                        to={`/blogs/${link.id}`} 
                                                        id={link.id} className={styles["create-link"]} 
                                                        onClick={()=>this.renderBlog(link.id)}>
                                                            {link.title}
                                                            <hr className={styles["link-hr"]}/>
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
                        ) :
                        (
                            <NotFound/>
                        )
                    )
                }
            </div>
        )
    }
}

export default Blog;