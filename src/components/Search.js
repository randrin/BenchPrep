import React from 'react';

const  Search = (props) =>{
    return (
        <div>
            <input type="text" 
                className="form-control"  
                placeholder={props.placeholder}
                onChange={props.handleChange}
            />
        </div>
    )
}
export default Search;