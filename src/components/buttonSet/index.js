import React from 'react';
import {connect} from 'react-redux';
import Button from '../button';


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onCancel: () => dispatch({
        type: 'SET_DEFAULTS',
    }),
    onReload: () => dispatch({
        type: 'FETCH_SAVED_DATA',
    }),
});


function ButtonSet({text, btnStyle, onCancel, onReload}) {

    const _cancel = () => {
        onCancel();
        onReload();
    };

    return (
        <div className='row footer'>
            <Button text='Save' userType='submit' btnStyle='btn-primary save'/>
            <Button text='Cancel' userType='button' btnStyle='btn-outline-primary' onClick={_cancel}/>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonSet);

