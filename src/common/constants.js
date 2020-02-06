// export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses"
export const COURSES_API_URL = "http://localhost:4000/api/jannunzi/courses"
export const MODULES_API_URL = "http://localhost:4000/api/jannunzi/modules"
export const COURSES_MODULES_API_URL = (courseId) => `http://localhost:4000/api/jannunzi/courses/${courseId}/modules`
