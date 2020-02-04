import React from "react";

const LessonTabs = ({lessons}) =>
    <ul>
        {
            lessons.map(lesson =>
                <li key={lesson._id}>{lesson.title}</li>)
        }
    </ul>

export default LessonTabs
