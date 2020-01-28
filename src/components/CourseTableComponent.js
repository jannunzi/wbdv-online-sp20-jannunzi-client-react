import React from 'react'
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({deleteCourse, courses}) =>
    <div>
        <h3>Course Table {courses.length}</h3>
        <ul>
            {
                courses.map(course =>
                    <CourseRowComponent
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                )
            }
        </ul>
    </div>

export default CourseTableComponent
