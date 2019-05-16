import React from 'react'

const FilterType = {
    All: 0,
    Active: 1,
    Done: 2
};

class ItemStatusFilter extends React.Component {

    state = {
        filter: FilterType.All
    }

    enableFilter = (filterType) => {
        this.setState({filter: filterType})
        this.props.onChanged(filterType)
    }

    enableAllFilter = () => {
        this.enableFilter(FilterType.All)
    }

    enableActiveFilter = () => {
        this.enableFilter(FilterType.Active)
    }

    enableDoneFilter = () => {
        this.enableFilter(FilterType.Done)
    }

    render () {
        const { filter } = this.state;
        const generalClass = 'btn btn-primary';
        const classNames = {
            [FilterType.All]: filter === FilterType.All ? `${generalClass} active` : generalClass,
            [FilterType.Active]: filter === FilterType.Active ? `${generalClass} active` : generalClass,
            [FilterType.Done]: filter === FilterType.Done ? `${generalClass} active` : generalClass
        };

        return (
            <div className="btn-group">
                <button type="button" className={classNames[FilterType.All]} onClick={this.enableAllFilter}>All</button>
                <button type="button" className={classNames[FilterType.Active]} onClick={this.enableActiveFilter}>Active</button>
                <button type="button" className={classNames[FilterType.Done]} onClick={this.enableDoneFilter}>Done</button>
            </div>
        )
    }
}

export {
    FilterType,
    ItemStatusFilter
}