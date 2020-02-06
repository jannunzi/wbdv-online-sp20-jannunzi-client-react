import React from "react";
import ModuleListItem from "./ModuleListItem";
import {connect} from "react-redux";
import {COURSES_MODULES_API_URL} from "../../common/constants";
import {createModule, findModuleForCourse} from "../../services/ModuleService";
import {CREATE_MODULE, FIND_MODULES_FOR_COURSE, findModulesForCourse} from "../../actions/moduleActions";

class ModuleList extends React.Component {

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    state = {
        activeModuleId: '',
        editingModuleId: ''
    }

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.modules && this.props.modules.map(module =>
                        <ModuleListItem
                            edit={() => this.setState({
                                editingModuleId: module._id
                            })}
                            select={() => this.setState({
                                activeModuleId: module._id
                            })}
                            save={() => this.setState({
                                editingModuleId: ''
                            })}
                            editing={module._id === this.state.editingModuleId}
                            active={module._id === this.state.activeModuleId}
                            module={module}/>)
                }
                <li className="list-group-item">
                    <button onClick={
                        () => this.props.createModule(this.props.courseId)
                    }>
                        Add
                    </button>
                </li>
            </ul>
        );
    }
}

export default connect(
    (state) => ({
        modules: state.modules.modules
    }),
    (dispatch) => ({
        createModule: (courseId) => {
            createModule(courseId, {title: 'New Module'})
                .then(actualModule =>
                    dispatch(createModule(actualModule)))
        },
        findModulesForCourse: (courseId) => {
            findModuleForCourse(courseId)
                .then(modules =>
                    dispatch(findModulesForCourse(modules)))
        }
    })
)(ModuleList)
