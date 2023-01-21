import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container mt-4 d-flex flex-column justify-content-center align-items-center">
      <div className=" mt-4 ">
        <p className="">Page Not Found !!!</p>
        <Button className="mt-4">
          <Link className="text-white text-decoration-none" to={"/"}>
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
