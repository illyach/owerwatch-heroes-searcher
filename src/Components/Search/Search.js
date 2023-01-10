import React from 'react';
import './Search.css'
function Search({ onSearch }) {
    return (
        <div className="search">
            <input
                type="search"
                placeholder="search hero"
                onChange={onSearch}/>
        </div>
    );
}

export default Search;