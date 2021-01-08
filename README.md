# Idea:

The basic idea behind this project is to diplay a page that consists of all the blogs present in the blog-backend server. The blogs are displayed in the form tiles. Each tile consists of blog banner, author and title. On clicking upon the blog banner, that particular blog gets rendered. The rendered blog has related links section which consists of link of other blogs. upon clicking the link, that partcular blog will be rendered.

## Backend:

A node js express server is designed for backend. The backend has following api endpoints :

1. To get all the blogs:

To get all the blogs stored in the file system, the api endpoint used is "/blogs". The url for the same is  http://localhost:5000/blogs.

2. To get a particular blog based on its Id:

To get a particular blog based on its Id, the api endpoint used is "/blogs/:id". The url for the same is  http://localhost:5000/blogs/:id. Here ":/id" will have the Id of the blog that needs to be rendered.

## Frontend:

The UI of the application is designed using React. The routing to different pages is implemented using React Routing. The frontend consists of the following pages:

1. Home Page: 

The home page consists of all the blogs that are fetched from the backend server. This page consists of blog tiles which has blog's banner image, blog's author and its title. To read about a particular blog, the user can click the banner of that particular blog and he/she will be directed to the detailed information contained in that blog. The route for this page is "/".

2. Individual Blog Page: 

This page contains the detailed information about a particular blog. It consists of a blog title, an banner image, and brief description about the blog. It also has an aside section which consists of a column known as Related Links. This column consists of few links which are relatable to the blog which the user is currently reading. This way, the user has an advantage of finding more similar blogs by just clicking upon any of the links provided in that column. This ensures that the user has an easy UI experience. The route for this page is: "/blogs/:id". Since each blog has an unique Id, ":id" will render the blog with that particular Id.

### Running the Application:

1. Clone the repository using

     https://github.com/Ashwini-Rathod/Blog-Rendering-React

2. Run this command only once:

      npm install

To install all the dependencies.

3. Then run the command:

      npm run start

To start the React Application.

4. The Backend is hosted on Heroku.

[Link for Backend](https://blog-rendering.herokuapp.com/blogs)

5. The application is hosted on vercel.

The Live link for the same is: https://blog-rendering-react.vercel.app/
