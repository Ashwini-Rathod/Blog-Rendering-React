import { Component } from "react";

class Blog extends Component{
    constructor(props){
    super(props)
        this.state = {
            blog: {},
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:5000/blogs/${this.props.match.params.id}`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            // console.log(data);
            this.setState({blog: data.data});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                <div>
                    <h1>{this.state.blog.title}</h1>
                    <img src={this.state.blog.imageUrl} alt="Blog Banner"/>
                    <p>{this.state.blog.content}</p>
                </div>
                <div>
                    <h1>Related Links</h1>
                </div>
            </div>
        )
    }
}

export default Blog;