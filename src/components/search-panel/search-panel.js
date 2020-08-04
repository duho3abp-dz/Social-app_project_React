import React from 'react';

// ------------- Style -------------

import './search-panel.scss'

// ------------- App -------------

const SearchPanel = () => {
    return (
        <input 
            className="form-control search-input"
            type="text"
            placeholder="Search by records"
        />
    )
}

export default SearchPanel;