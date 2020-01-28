import React from 'react'
import CourseHeadingComponent from "../components/CourseHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";

// const courses = [
//     {_id: '123', title: 'Course A'},
//     {_id: '234', title: 'Course B'},
//     {_id: '345', title: 'Course C'},
//     {_id: '456', title: 'Course D'}
// ]

class CourseManagerContainer extends React.Component {
    state = {
        courses: [
            {_id: '123', title: 'Course A'},
            {_id: '234', title: 'Course B'},
            {_id: '345', title: 'Course C'},
            {_id: '456', title: 'Course D'}
        ]
    }

    deleteCourse = (deletedToCourse) => {
        this.setState(prevState => ({
                courses: prevState.courses.filter(course =>
                    course._id !== deletedToCourse._id
                )
            })
        )
    }

    addCourse = () => {
        this.setState(prevState => ({
            courses: [...prevState.courses, {
                _id: (new Date()).getTime() + '',
                title: 'New Course'
            }]
        })
        )
    }

    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <CourseHeadingComponent/>
                <button onClick={this.addCourse}>Add</button>
                <CourseTableComponent
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
            </div>
        );
    }
}

export default CourseManagerContainer
