import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Category/CourseCard';

const AllCourses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course}></CourseCard>
          ))}
        </Row>
      </div>
    );
};

export default AllCourses;