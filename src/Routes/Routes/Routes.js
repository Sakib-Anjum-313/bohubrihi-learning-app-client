import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import RegAndLogin from "../../layouts/RegAndLogin";
import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import EkhoniVortiHon from "../../Pages/EkhoniVortiHon/EkhoniVortiHon";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Reg from "../../Pages/Login/Register/Reg";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },

  {
    path: "/all-courses",
    element: <Main></Main>,
    children: [
      {
        path: "/all-courses",
        element: <AllCourses></AllCourses>,
        loader: () => fetch("http://localhost:5000/all-courses"),
      },
      {
        path: "/all-courses/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/all-courses/category/:category_id/:_id/course-details",
    element: <EkhoniVortiHon></EkhoniVortiHon>,
  },
  {
    path: "/all-courses/category/:category_id/:_id/checkout",
    element: (
      <PrivateRoute>
        <CheckOut></CheckOut>
      </PrivateRoute>
    ),
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
