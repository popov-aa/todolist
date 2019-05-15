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
            {label: 'test 1', important: false, id: 1, done: false},
            {label: 'test 2', important: true, id: 2, done: false},
            {label: 'test 3', important: false, id: 3, done: false}
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

    toggleDone = (id) => {
        this.toggleProperty(id, 'done')
    }

    toggleImportant = (id) => {
        this.toggleProperty(id, 'important')
    }

    toggleProperty = (id, property) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.map((el) => {
                    if (el.id === id) {
                        return {...el, [property]: !el[property]}
                    } else {
                        return el
                    }
                })
            }
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
                    onDoneToggled={this.toggleDone}
                    onImportantToggled={this.toggleImportant}
                />
                <AddItem
                    onAdded={this.addItem}
                />
            </div>
        )
    }
}