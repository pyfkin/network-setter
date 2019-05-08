import React from 'react';
import PropTypes from 'prop-types';

import './radioFields.css';

function RadioFields({value, index}){
    let check = false;
   /* if ((value) === inputDifficultyValue) {
        check = true;
    }*/
    return(
        <div className='form-check'>
            <label className="form-check-label" htmlFor={index}>
                <input className="form-check-input" type="radio" name="levelRadios" id={index}
                       value={value} /*onClick={difficultyValueChanged}*/ defaultChecked={check}/>
                {value}
                <span className="checkmark"> </span>
            </label>
        </div>
    );
}



RadioFields.propTypes = {

};

export default RadioFields;