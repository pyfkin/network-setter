import React from 'react';
import PropTypes from 'prop-types';
import InputFields from '../inputFields';
// import './inputGroupIPFields.css';

function InputGroupIPFields(){
    return(
        <div className='input-group'>
            <InputFields labelText='IP address:' mandatory='true'/>
            <InputFields labelText='Subnet Mask:' mandatory='true'/>
            <InputFields labelText='Default Gateway:' mandatory='false'/>
        </div>
    );
}



InputGroupIPFields.propTypes = {

};

export default InputGroupIPFields;