# Idea:

The basic idea behind this project is to diplay a page that consists of all the blogs present in the blog-backend server. The blogs are displayed in the form tiles. Each tile consists of blog banner, author and title. On clicking upon the blog banner, that particular blog gets rendered. The rendered blog has related links section which consists of link of other blogs. upon clicking the link, that partcular blog will be rendered.

## Backend:

A node js express server is designed for backend. The backend has following api endpoints :

### To get all the blogs:

To get all the blogs stored in the file system, the api endpoint used is "/blogs". The url for the same is  http://localhost:5000/blogs.

### To get a particular blog based on its Id:

To get a particular blog based on its Id, the api endpoint used is "/blogs/:id". The url for the same is  http://localhost:5000/blogs/:id. Here ":/id" will have the Id of the blog that needs to be rendered.

## Frontend:

The UI of the application is designed using React. 
