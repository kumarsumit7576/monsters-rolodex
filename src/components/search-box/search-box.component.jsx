import React from 'react';
import './search-box.component.css';

export const SearchBox = ({ placeholder, handleChange }) => (

    <input type='search' placeholder={placeholder} className='search'
        onChange={handleChange}>
    </input>
);

export default SearchBox;