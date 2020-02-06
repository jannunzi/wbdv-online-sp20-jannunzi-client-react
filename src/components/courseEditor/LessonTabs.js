import React from "react";
import {connect} from "react-redux";

const LessonTabs = ({lessons}) =>
    <ul>
        {
            lessons && lessons.map(lesson =>
                <li key={lesson._id}>{lesson.title}</li>)
        }
    </ul>

export default connect(
    (state) => ({
        lessons: state.lessons.lessons
    })
)(LessonTabs)
