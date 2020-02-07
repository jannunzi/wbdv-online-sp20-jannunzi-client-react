import React from "react";
import {connect} from "react-redux";
import {createModule, findModuleForCourse} from "../services/ModuleService";
import {findModulesForCourse} from "../actions/moduleActions";
import ModuleListComponent from "../components/courseEditor/ModuleListComponent";

const stateToPropertyMapper = (state) => ({
    modules: state.modules.modules
})

const dispatchToPropertyMapper = (dispatch) => ({
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

const ModuleListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListComponent)

export default ModuleListContainer
