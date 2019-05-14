import React from 'react'

class ItemStatusFilter extends React.Component {
    render () {
        return (
            <div className="btn-group">
                <button type="button">All</button>
                <button type="button">Active</button>
                <button type="button">Done</button>
            </div>
        )
    }
}

export default ItemStatusFilter;