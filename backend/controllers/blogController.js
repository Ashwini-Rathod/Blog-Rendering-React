const fs = require("fs");
const path = require("path");
const blogFile = path.join(__dirname, "..", "data", "data.json");
const blogs = JSON.parse(fs.readFileSync(blogFile, "utf-8")); 

const getAllBlogs = (req, res, next)=>{
    let blogArray = [];
    if(Object.keys(req.query).length !== 0){
        blogs.forEach((blog)=>{
            Object.keys(req.query).forEach((property)=>{
                console.log(req.query[property]);
                let queryArray = ["id", "author", "title", "content", "links"];
                if(queryArray.includes(property)){
                    let regex = new RegExp(req.query[property], "i");
                    console.log(regex);
                    let result =regex.test(blog[property]);
                    if(result){
                        blogArray.push(blog);
                    }
                }
             
            });
        })
        if(blogArray.length == 0){
            res.status(404).json({
                status: "Unsuccessful",
                data: [],
            })
        }
            res.status(200).json({
            status: "Successful",
            data: [blogArray],
        })
    }
    else{
        res.status(200).json({
           status: "Successful",
           data: [blogs], 
        })
    }
}

const getBlogById = (req, res, next)=>{
    let blogFound = blogs.find((blog)=>{
        return blog.id == req.params.id;
    })
    if(!blogFound){
        res.status(404).json({
            status: "Unsuccessful",
            message: "Blog with the entered ID does not exists",
        })
    }
    res.status(200).json({
        status: "Successful",
        data: blogFound,
    })
}


module.exports.getAllBlogs = getAllBlogs;
module.exports.getBlogById = getBlogById;