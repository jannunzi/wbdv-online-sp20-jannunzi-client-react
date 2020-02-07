import React from "react";
import {connect} from "react-redux";

class LessonTabs extends React.Component {

    componentDidMount() {
        this.props.findAllLessons()
    }

    state = {
        editingLessonId: '',
        lesson: {
            title: '',
            _id: ''
        }
    }

    render() {
        return(
            <ul className="nav nav-tabs">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <li className="nav-item" key={lesson._id}>
                            <a className="nav-link">
                                {this.state.lesson._id !== lesson._id &&
                                <span>{lesson.title}</span>}
                                {this.state.lesson._id === lesson._id &&
                                <input
                                    onChange={(e) => {
                                        const newTitle = e.target.value
                                        this.setState(prevState => ({
                                            lesson: {
                                                ...prevState.lesson,
                                                title: newTitle
                                            }
                                        }))
                                    }}
                                    value={this.state.lesson.title}/>}
                                <button onClick={() =>
                                    {
                                        this.props.updateLesson(this.state.lesson)
                                            .then(() => this.setState({
                                                lesson: {
                                                    title: '',
                                                    _id: ''
                                                }
                                            }))
                                    }
                                }>
                                    Save
                                </button>
                                <button onClick={
                                    () => this.props.deleteLesson(lesson._id)}>
                                    X
                                </button>
                                <button onClick={() => {
                                    this.setState({
                                        lesson: lesson
                                    })
                                }}>
                                    Edit
                                </button>
                            </a>
                        </li>)
                }
                <li className="nav-item">
                    <button onClick={this.props.addLesson}>+</button>
                </li>
            </ul>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    updateLesson: (lesson) =>
        fetch(`http://localhost:4000/api/jannunzi/lessons/${lesson._id}`, {
            method: 'PUT',
            body: JSON.stringify(lesson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualLesson =>
                dispatcher({
                    type: 'UPDATE_LESSON',
                    lesson: actualLesson,
                    lessonId: actualLesson._id
                })),
    addLesson: () =>
        fetch("http://localhost:4000/api/jannunzi/lessons", {
            method: 'POST',
            body: JSON.stringify({title: 'New Lesson'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualLesson =>
                dispatcher({
                    type: 'CREATE_LESSON',
                    lesson: actualLesson
                })),
    deleteLesson: (lessonId) =>
        fetch(`http://localhost:4000/api/jannunzi/lessons/${lessonId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_LESSON',
                    lessonId: lessonId
                })),
    findAllLessons: () =>
        fetch("http://localhost:4000/api/jannunzi/lessons")
            .then(response => response.json())
            .then(lessons =>
                dispatcher({
                    type: 'FIND_ALL_LESSONS',
                    lessons: lessons
                })
            )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(LessonTabs)
