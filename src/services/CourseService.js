class CourseService {
	createCourse = (course) => {
		return fetch("https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses", {
			method: 'POST',
			body: JSON.stringify(course),
			headers: {
				'content-type': 'application/json'
			}
		}).then(response => response.json())
	}
	findAllCourses = () => {
		return fetch("https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses")
			.then(response => response.json())
	}
	deleteCourse = (courseId) => {
		return fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${courseId}`, {
			method: 'DELETE'
		})
		.then(response => response.json())
	}
}

export default CourseService;