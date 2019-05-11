import React from 'react';
import PropTypes from 'prop-types';


function CheckBoxFields({labelText, name, onChange, value}) {
    return (

        <div className='checkBox-input-group col-12'>
            <input type='checkbox' id={name} onChange={onChange} checked={value}/>
            <label htmlFor={name}>{labelText}</label>
        </div>
    );
}


CheckBoxFields.propTypes = {
    labelText: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    onInputChanged: PropTypes.func,
};

export default CheckBoxFields;
