import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Courses/Course";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/course/:id",
        element: <Course></Course>,
      },
      
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);