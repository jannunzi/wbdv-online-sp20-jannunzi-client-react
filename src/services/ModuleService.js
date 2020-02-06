import {COURSES_MODULES_API_URL} from "../common/constants";

export const findModuleForCourse = (courseId) =>
    fetch(`http://localhost:4000/api/jannunzi/courses/${courseId}/modules`)
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(COURSES_MODULES_API_URL(courseId), {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
