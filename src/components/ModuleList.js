import React from "react";
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules}) =>
    <ul>
        {
            modules.map(module =>
                <ModuleListItem module={module}/>)
        }
    </ul>

export default ModuleList
