import React, {memo}  from 'react';
import PropTypes from 'prop-types';
import './inputFields.css';


function TextFields({labelText, mandatory, onChange, name, value}){
    let _mandatory = mandatory ? '*' : '';
    return(
        <div className='input-group col-12'>
            <label className='col-6 form-label'>{labelText}<span> {_mandatory}</span></label>
            <input type='text' className='col-6 form-control form-input'
                   onChange={onChange}  value={value}/>
        </div>
    );
}


TextFields.propTypes = {
    labelText: PropTypes.string,
    mandatory: PropTypes.bool,
    inputValue: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

export default memo(TextFields);
