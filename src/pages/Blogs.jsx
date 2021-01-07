import {Component } from "react";
import {Link} from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import initFontAwesome from "../components/initFontAwesome";
import  styles from "./Blogs.module.css";
import NotFound from "../components/NotFound";
import Spinner from "react-bootstrap/Spinner";
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
        initFontAwesome();
        return (
            <div>
                {
                    this.state.status === "" ? 
                    (
                       <div className={styles["loading"]}>   
                         <Spinner animation="grow" variant="primary" size="sm"className={styles["loading-spinner"]}/>
                         <Spinner animation="grow" variant="success" size="sm" className={styles["loading-spinner"]}/>
                         <Spinner animation="grow" variant="danger" size="sm" className={styles["loading-spinner"]}/>
                       </div>
                    ) :
                    ( 
                        this.state.status === "Successful" ? (
                            <div>
                            <Nav/>
                            <div className={styles["blog-container"]}>
                            {
                                this.state.blogs.map((blog)=>{
                                    return(
                                        <div className={styles[ "blog-card"]} key={blog.id}>
                                            <div>
                                            <Link to={`/blogs/${blog.id}`}>
                                                <img src= {blog.imageUrl} alt="Blog Banner" className={styles["blog-image-tiles"]}></img>
                                            </Link>
                                            </div>
                                            <div className={styles["blog-card-content"]}>
                                                <h3 className={styles["blog-author"]}>{blog.author}</h3>
                                                <h3 className={styles["blog-title"]}>{blog.title}</h3>
                                            </div>  
                                        </div>
                                    )
                                })
                            }
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

export default Blogs;