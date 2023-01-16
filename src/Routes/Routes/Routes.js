import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import RegAndLogin from "../../layouts/RegAndLogin";
import AllCourses from "../../Pages/AllCourses/AllCourses";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Courses/Course";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Reg from "../../Pages/Login/Register/Reg";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },

  {
    path: "/all-courses",
    element: <Main></Main>,
    children: [
      {
        path: "/all-courses",
        element: <AllCourses></AllCourses>,
        loader: ()=> fetch("http://localhost:5000/all-courses"),
      },
      {
        path: "/all-courses/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/all-courses/course/:id",
        element: <Course></Course>,
      },
    ],
  },
  {
    path: "/login",
    element: <RegAndLogin></RegAndLogin>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/register",
        element: <Reg></Reg>,
      },
    ],
  },
]);
