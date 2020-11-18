import React from 'react';
import { connect } from 'react-redux';
import {setFilter, visibilityFilters } from '../store/actions';

const Filter = ({ setFilter }) => {
    return (
       <> 
        <button 
        className="btn btn-primary mr-2" 
        onClick={ () => setFilter(visibilityFilters.SHOW_ALL) } 
        >All</button>
        <button  
        className="btn btn-primary mr-2"
        onClick={ () => setFilter(visibilityFilters.SHOW_DONE) }
        >Done</button>
        <button 
        className="btn btn-primary"
        onClick={ () => setFilter(visibilityFilters.SHOW_ACTIVE) }
        >not</button>
       </> 
    )
}

export default connect(null, {
    setFilter
})(Filter); 