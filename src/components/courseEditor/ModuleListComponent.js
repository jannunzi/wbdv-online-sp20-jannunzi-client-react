import React from "react";
import ModuleListItem from "./ModuleListItem";

export default class ModuleListComponent extends React.Component {

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

