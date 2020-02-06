import React from "react";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import {Link} from "react-router-dom";

const CourseEditorComponent = ({hideEditor, match, courseId, history}) =>
    <div>
        <button onClick={() => {
            history.push("/")
        }}>
            Close
        </button>
        <Link to="/">
            Back
        </Link>
    <h3>Course Editor {courseId}</h3>
        <div className="row">
            <div className="col-3">
                <ModuleList modules={[
                    {title: 'Module A'},
                    {title: 'Module B'},
                    {title: 'Module C'},
                    {title: 'Module D'}
                ]}/>
            </div>
            <div className="col-9">
                <LessonTabs lessons={[
                    {_id: "123", title: "Lesson A"},
                    {_id: "234", title: "Lesson B"},
                    {_id: "345", title: "Lesson C"},
                    {_id: "456", title: "Lesson D"}
                ]}/>
                {/*<TopicPills/>*/}
                {/*<WidgetList/>*/}
            </div>
        </div>
    </div>
export default CourseEditorComponent
