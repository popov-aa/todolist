import React from 'react'
import './AddItem.css'

export default class AddItem extends React.Component {
    render() {
        const { onAdded } = this.props
        return (
            <div className="add-item">
                <input type="text"/>
                <button className="btn btn-outline-secondary" onClick={() => onAdded('test')}>Add</button>
            </div>
        )
    }
}