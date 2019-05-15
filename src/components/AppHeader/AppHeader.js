import React from "react";
import './AppHeader.css';

const AppHeader = ({doneCount, todoCount}) => {
    return (
        <div className="app-header d-flex">
            <h1>ToDo List</h1>
            <h2>Done <b>{doneCount}</b>, To do <b>{todoCount}</b></h2>
        </div>
    );
}

export default AppHeader;