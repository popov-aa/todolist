import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter'
import ToDoList from '../TodoList';
import AddItem from '../AddItem';

export default class App extends React.Component {

    maxId = 0;

    state = {
        todoData: [
            this.createTodoItem('test 1'),
            this.createTodoItem('test 2'),
            this.createTodoItem('test 3'),
            this.createTodoItem('test 4')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    addItem = (label) => {
        this.setState(({todoData}) => {
            let newTodoData = [...todoData]
            newTodoData.push(this.createTodoItem(label))
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
        let doneCount = this.state.todoData.filter((el) => el.done).length
        let todoCount = this.state.todoData.length - doneCount
        return (
            <div>
                <AppHeader doneCount={doneCount} todoCount={todoCount}/>
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