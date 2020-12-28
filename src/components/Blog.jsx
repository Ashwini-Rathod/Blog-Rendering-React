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
        // console.log(this.state.blog);
        return(
            <div>
                <h1>{this.state.blog.author}</h1>
                <h1>{this.state.blog.title}</h1>
            </div>
        )
    }
}

export default Blog;