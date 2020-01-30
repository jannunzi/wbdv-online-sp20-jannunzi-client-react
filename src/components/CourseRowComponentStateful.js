import React from "react";

class CourseRowComponentStateful extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        active: false
    }
    editCourse = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }
    saveCourse = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }
    updateForm = (e) => {}
    render() {
        return(
            <li className={`list-group-item ${this.state.active?'active':''}`}
                onClick={() => this.editCourse()}>
                {!this.state.active && this.props.course.title}
                {this.state.active && <input onChange={this.updateForm} value={this.props.course.title}/>}
                {
                    this.state.active && <span>
                        <button>edit</button>
                        <button onClick={(event) => this.props.deleteCourse(this.props.course)}>Delete</button>
                        <button onClick={() => this.saveCourse()}>save</button>
                    </span>
                }
            </li>
        )
    }
}
    
export default CourseRowComponentStateful
