import React from "react";

const CourseRowComponent = ({deleteCourse, course}) =>
    <li>
        {course.title}
        <button onClick={(event) => deleteCourse(course)}>Delete</button>
    </li>

export default CourseRowComponent
