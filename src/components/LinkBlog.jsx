import { Component } from "react";
import { Link } from "react-router-dom";
class LinkBlog extends Component{
    constructor(props){
    super(props)
        this.state = {
            blog: [],
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:5000/blogs/${this.props.match.params.id}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data.data);
            this.setState({blog: data.data});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
        let relatedLinks = (this.state.blog.links);
        // console.log("Related Links",relatedLinks);
        // console.log("Blog Data: ",this.state.blog)
        return(
            <div>
                <div>
                    <h1>{this.state.blog.title}</h1>
                    <img src={this.state.blog.imageUrl} alt="Blog Banner"/>
                    <p>{this.state.blog.content}</p>
                </div>
                <div>
                    <h1>Related Links</h1>
                    {
                        relatedLinks ? (
                            relatedLinks.map((link)=>{
                                return (
                                    <div>
                                    <Link to={`/blogs/${link.id}`}>
                                        <p>{link.title}</p>
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
        )
    }
}

export default LinkBlog;