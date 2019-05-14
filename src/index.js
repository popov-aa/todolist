import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import ToDoList from './components/TodoList'

const App = () => {
    const todoData = [
        {label: 'test 1', important: false, id: 1},
        {label: 'test 2', important: true, id: 2},
        {label: 'test 3', important: false, id: 3}
    ]
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ToDoList todos={todoData}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))