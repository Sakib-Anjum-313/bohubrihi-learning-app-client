import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories);
  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="bg-white p-4">
      <>
        <h4 className="fw-bold mb-4">কোর্সের ধরণ</h4>
        <div>
          {categories.map((category) => (
            <p key={category.id}>
              <Link
                className="vorti fw-semibold  text-decoration-none mb-4 pb-4"
                to={`/all-courses/category/${category.id}`}
              >
                {category.name}   <span className="fw-bold">></span>
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
