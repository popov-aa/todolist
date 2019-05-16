import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import {ItemStatusFilter, FilterType} from '../ItemStatusFilter'
import ToDoList from '../TodoList';
import AddItem from '../AddItem';

export default class App extends React.Component {

    maxId = 0;

    state = {
        searchFilter: '',
        filterType: FilterType.All,
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

    searchLabelChanged = (label) => {
        this.setState({searchFilter: label})
    }

    filterTypeChanged = (filterType) => {
        this.setState({filterType: filterType})
    }

    render () {
        const {todoData, searchFilter, filterType} = this.state
        let doneCount = this.state.todoData.filter((el) => el.done).length
        let todoCount = this.state.todoData.length - doneCount
        let newTodoData = this.state.searchFilter === '' ?
            todoData :
            todoData.filter((el) => el.label.includes(searchFilter))
        newTodoData = newTodoData.filter((el) => {
            switch (filterType) {
                case FilterType.All: return true;
                case FilterType.Active: return !el.done;
                case FilterType.Done: return el.done;
                default: return false;
            }
        })
        return (
            <div>
                <AppHeader doneCount={doneCount} todoCount={todoCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onChanged={this.searchLabelChanged}/>
                    <ItemStatusFilter onChanged={this.filterTypeChanged}/>
                </div>
                <ToDoList
                    todos={newTodoData}
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