import React from 'react';
import {connect} from 'react-redux';
import Button from '../button';
import dataService from '../../services/dataService';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onSaveData: (e) => dispatch({
        type: 'ON_SAVE_DATA',
        payload: '',
    }),
    onCancel: (e) => dispatch({
        type: 'SET_DEFAULTS',
    }),
    onReload: (e) => dispatch({
        type: 'FETCH_SAVED_DATA',
    }),
});


function ButtonSet({text, btnStyle, onSaveData, onCancel, onReload}) {

    const qwer = () => {
        if (dataService.isValid()) {
            dataService.setData({
                    item1: 1,
                    item2: [123, "two", 3.0],
                    item3:"hello"
                });
        }
    };

    const _cancel = () => {
        onCancel();
        onReload();
    };

    return (
        <div className='row footer'>
            <Button text='Save' btnStyle='btn-primary save' onClick={qwer}/>
            <Button text='Cancel' btnStyle='btn-outline-primary' onClick={_cancel}/>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonSet);

