import React from "react";
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

const ToDoList = ({todos, onDeleted, onImportantToggled, onDoneToggled}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onImportantToggled={() => onImportantToggled(id)}
                    onDoneToggled={() => onDoneToggled(id)}
                />
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default ToDoList