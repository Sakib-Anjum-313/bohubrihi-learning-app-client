import React, { createContext, useState } from 'react';
export const CourseDetailContext = createContext();

const CourseDetailsProvider = ({ children }) => {
    const [selectCourse, setSetectCourse] = useState('sakib');
    
    const courseInfo = { selectCourse, setSetectCourse };
    return (
      <CourseDetailContext.Provider value={courseInfo}>
        {children}
      </CourseDetailContext.Provider>
    );
};

export default CourseDetailsProvider;