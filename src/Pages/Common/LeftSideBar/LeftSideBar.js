import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="bg-white p-4">
      <>
        <h4>All Categories: {categories.length}</h4>
        <div>
          {categories.map((category) => (
            <p key={category.id}>
              <Link to={`/all-courses/category/${category.id}`}>
                {" "}
                {category.name}
              </Link>
            </p>
          ))}
        </div>
      </>
      <hr></hr>
      <>
        <h4>Skill Level</h4>
      </>
    </div>
  );
};

export default LeftSideBar;
