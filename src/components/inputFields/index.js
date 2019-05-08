import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './inputFields.css';

const mapStateToProps = state => ({
    inputNameValue: state.common.inputNameValue,
});

const mapDispatchToProps = dispatch => ({
    onInputNameChanged: (e) => dispatch({
        type: "ON_INPUT_NAME_CHANGED",
        payload: e.target.value,
    }),
});




function InputFields({labelText, mandatory, onInputNameChanged, inputNameValue}){
    let _mandatory = {mandatory} && '*';
    return(
        <div className='input-group'>
            <label className='name-label col-12'>{labelText}<span> {_mandatory}</span></label>
            <input type='text' className='form-control name-input'
                   onChange={onInputNameChanged} value={inputNameValue}/>
        </div>
    );
}



InputFields.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(InputFields);
