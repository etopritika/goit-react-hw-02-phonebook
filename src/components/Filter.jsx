import React from 'react';

export default function Filter({inputValue, onChange}) {
    return(
        <div className='filter__container'>
            <label>
                Find contacts by name
                <input type="text" name='filter' value={inputValue} onChange={onChange}/>
            </label>
        </div>
    )
}