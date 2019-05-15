import React from "react";
import './SearchPanel.css';

export default class SearchPanel extends React.Component {

    state = {
        label: ''
    }

    onChanged = (e) => {
        let label = e.target.value
        this.setState({
            label: label
        })
        this.props.onChanged(label)
    }

    render () {
        const {label} = this.state;
        const style = {
            fontSize: '20px'
        }
        return <input
            className="search-input"
            style={style}
            placeholder="Type here to search"
            value={label}
            onChange={this.onChanged}
        />;
    }
}