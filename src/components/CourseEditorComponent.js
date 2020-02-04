import React from "react";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";

const CourseEditorComponent = ({hideEditor}) =>
    <div>
        <button onClick={hideEditor}>Close</button>
    <h3>Course Editor</h3>
        <div className="row">
            <div className="col-3">
                <ModuleList modules={[
                    {title: 'Course A'},
                    {title: 'Course B'},
                    {title: 'Course C'},
                    {title: 'Course D'}
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
