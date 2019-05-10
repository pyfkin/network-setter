import React from 'react';
import PropTypes from 'prop-types';


function CheckBoxFields({labelText, name, onChange}) {
    return (

        <div className='checkBox-input-group col-12'>
            <input type='checkbox' id={name} onChange={onChange}/>
            <label htmlFor={name}>{labelText}</label>
        </div>

    );
}


CheckBoxFields.propTypes = {
    labelText: PropTypes.string,
    name: PropTypes.string,
    onInputChanged: PropTypes.func,
};

export default CheckBoxFields;
