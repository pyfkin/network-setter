import React, {memo}  from 'react';
import PropTypes from 'prop-types';
import './inputFields.css';


function InputFields({labelText, mandatory, onChange, name, ...rest}){
    let _mandatory = mandatory ? '*' : '';
    return(
        <div className='input-group col-12'>
            <label className='col-6 form-label'>{labelText}<span> {_mandatory}</span></label>
            <input type='text' className='col-6 form-control form-input'
                   onChange={onChange} value={rest[name]}/>
        </div>
    );
}



InputFields.propTypes = {
    labelText: PropTypes.string,
    mandatory: PropTypes.bool,
    inputValue: PropTypes.string,
    onInputChanged: PropTypes.func,
};

export default memo(InputFields);
