import React from 'react';
import PropTypes from 'prop-types';
import InputFields from '../inputFields';
import './inputGroupDNSFields.css';

function InputGroupDNSFields(){
    return(
        <div className='input-group'>
            <InputFields labelText='Preferred DNS server:' mandatory='true'/>
            <InputFields labelText='Alternative DNS server:' mandatory='false'/>
        </div>
    );
}



InputGroupDNSFields.propTypes = {

};

export default InputGroupDNSFields;