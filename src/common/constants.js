// export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses"
export const COURSES_API_URL = "http://localhost:4000/api/jannunzi/courses"
export const MODULES_API_URL = "http://localhost:4000/api/jannunzi/modules"
export const COURSES_MODULES_API_URL = (courseId) => `http://localhost:4000/api/jannunzi/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `http://localhost:4000/api/jannunzi/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `http://localhost:4000/api/jannunzi/lessons/${lessonId}/topics`
