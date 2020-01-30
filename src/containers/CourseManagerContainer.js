import React from 'react'
import CourseHeadingComponent from "../components/CourseHeadingComponent";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseService from "../services/CourseService";

const courseService = new CourseService()

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        newCourseTitle: 'New Course',
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    deleteCourse = (deletedToCourse) => {
        courseService.deleteCourse(deletedToCourse._id)
            .then(status => {
                return courseService.findAllCourses()
            })
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })

        // this.setState(prevState => ({
        //         courses: prevState.courses.filter(course =>
        //             course._id !== deletedToCourse._id
        //         )
        //     })
        // )
    }

    addCourse = () => {
        courseService.createCourse({
            title: this.state.newCourseTitle
        }).then(actual => {
            return courseService.findAllCourses()
        })
        .then(courses => {
            this.setState({
                courses: courses
            })
        })

        // this.setState(prevState => ({
        //     courses: [
        //         ...prevState.courses,
        //         {
        //             _id: (new Date()).getTime() + '',
        //             title: prevState.newCourseTitle
        //         }
        //     ]
        // })
        // )
    }

    toggle = () => {
        this.setState(prevState => ({
            layout: prevState.layout === 'grid' ? 'table': 'grid'
        }))
    }

    updateFormState = (event) => {
        console.log(event.target.value)
        this.setState({
            newCourseTitle: event.target.value
        })
    }

    editCourse = (course) => {
        this.setState(prevState => ({
            courses: prevState.courses.map(c => {
                c.editing = false
                if(c._id === course._id) {
                    c.editing = true
                } else {
                    c.editing = false
                }
                return c
        })}))
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Course Manager</h1>
                <CourseHeadingComponent/>
                <input
                    onChange={this.updateFormState}
                    value={this.state.newCourseTitle}
                    placeholder="New Course Title"/>
                <button onClick={this.addCourse}>Add</button>
                <button onClick={this.toggle}>Toggle</button>
                {
                    this.state.layout === "grid" &&
                    <CourseGridComponent
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                }
                {
                    this.state.layout === "table"  &&
                    <CourseTableComponent
                        editCourse={this.editCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                }
            </div>
        );
    }
}

export default CourseManagerContainer
