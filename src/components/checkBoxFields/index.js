import React  from 'react';
import PropTypes from 'prop-types';


function CheckBoxFields({labelText, onChange, name}){
    return(
       /* <div className='input-group col-12'>
            <label className='col-6 form-label'>{labelText}<span> {_mandatory}</span></label>
            <input type='radio' className='col-6 form-control form-input'
                   onChange={onChange} value={rest[name]}/>*/

       <div className="checkBox-input-group col-12">
            <input type="checkbox" id="html"/>
                <label htmlFor="html">{labelText}</label>
        </div>

    );
}


CheckBoxFields.propTypes = {
    labelText: PropTypes.string,
    inputValue: PropTypes.string,
    onInputChanged: PropTypes.func,
};

export default CheckBoxFields;
