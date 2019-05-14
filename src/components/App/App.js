import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter'
import ToDoList from '../TodoList';
import AddItem from '../AddItem';

export default class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [
            {label: 'test 1', important: false, id: 1},
            {label: 'test 2', important: true, id: 2},
            {label: 'test 3', important: false, id: 3}
        ]
    };

    addItem = (text) => {
        this.setState(({todoData}) => {
            let newTodoData = [...todoData]
            newTodoData.push({
                label: text,
                important: false,
                id: this.maxId++
            })
            return {
                todoData: newTodoData
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.filter(item => {
                    return item.id !== id
                })}
        })
    }

    render () {
        return (
            <div>
                <AppHeader/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <ToDoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
                <AddItem
                    onAdded={this.addItem}
                />
            </div>
        )
    }
}