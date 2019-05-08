import React from 'react';
import PropTypes from 'prop-types';

import './radioFields.css';

function RadioFields({value, index, name}){
    let check = false;
   /* if ((value) === inputDifficultyValue) {
        check = true;
    }*/
    return(
        <div className='form-check'>
            <label className='form-check-label' htmlFor={`${name}${index}`}>
                <input className='form-check-input' type='radio' name={name} id={`${name}${index}`}
                       value={value} onClick={difficultyValueChanged} defaultChecked={check}/>
                {value}
                <span className='checkmark'> </span>
            </label>
        </div>
    );
}



RadioFields.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    index: PropTypes.number,

};

export default RadioFields;