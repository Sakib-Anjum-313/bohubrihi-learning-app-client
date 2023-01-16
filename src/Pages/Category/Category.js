import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const Category = () => {
  const categoryCourses = useLoaderData();
  console.log(categoryCourses);

  return (
    <div className="bg-white p-4">
      <h2>this category has courses : {categoryCourses.length}</h2>
      <Row xs={1} md={3} className="g-4">
        {categoryCourses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </Row>
    </div>
  );
};

export default Category;
