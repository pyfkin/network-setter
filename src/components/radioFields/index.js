import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import './radioFields.css';

const mapStateToProps = state => ({
    ethernetIpAuto: state.ethernet.ethernetIpAuto,
    ethernetDnsAuto: state.ethernet.ethernetDnsAuto,

    wirelessIpAuto: state.wireless.wirelessIpAuto,
    wirelessDnsAuto: state.wireless.wirelessDnsAuto,
});

const mapDispatchToProps = dispatch => ({

});

function RadioFields({value, index, name, ...rest}){
    let check = false;
    if ((index) === rest[name]) {
        check = true;
    }
    return(
        <div className='form-check'>
            <label className='form-check-label' htmlFor={`${name}${index}`}>
                <input className='form-check-input' type='radio' name={name} id={`${name}${index}`}
                       value={index} /*onClick={difficultyValueChanged}*/ defaultChecked={check}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RadioFields);