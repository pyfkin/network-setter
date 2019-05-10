import React from 'react';
import {connect} from 'react-redux';
import Button from '../button';
import dataService from '../../services/dataService';


const mapStateToProps = state => ({

    btnText: state.wireless.btnText,
    selectedItem: state.wireless.selectedItem,
    // displayMenu: state.wireless.displayMenu,

    ethernetIp: state.ethernet.ethernetIp,
    ethernetMask: state.ethernet.ethernetMask,
    ethernetGateway: state.ethernet.ethernetGateway,

    wirelessIp: state.wireless.wirelessIp,
    wirelessMask: state.wireless.wirelessMask,
    wirelessGateway: state.wireless.wirelessGateway,

    ethernetIpAuto: state.ethernet.ethernetIpAuto,
    ethernetDnsAuto: state.ethernet.ethernetDnsAuto,

    wirelessIpAuto: state.wireless.wirelessIpAuto,
    wirelessDnsAuto: state.wireless.wirelessDnsAuto,

    securityKey: state.wireless.securityKey,
    enabledWifi: state.wireless.enabledWifi,
    enabledSecurityKey: state.wireless.enabledSecurityKey,
});

const mapDispatchToProps = dispatch => ({
    onSaveData: () => dispatch({
        type: 'ON_SAVE_DATA',
        payload: '',
    }),
    onCancel: () => dispatch({
        type: 'SET_DEFAULTS',
    }),
    onReload: () => dispatch({
        type: 'FETCH_SAVED_DATA',
    }),
});


function ButtonSet({text, btnStyle, onSaveData, onCancel, onReload, ...rest}) {
    const _save = (e) => {
        e.preventDefault();
        if (dataService.isValid(rest)) {

            dataService.setData({
                    item1: 1,
                    item2: [123, "two", 3.0],
                    item3:"hello"
                });
        }
    };

    function _cancel()  {
        onCancel();
        onReload();
    }

    return (
        <div className='row footer'>
            <Button text='Save' userType='submit' btnStyle='btn-primary save' onClick={_save}/>
            <Button text='Cancel' userType='button' btnStyle='btn-outline-primary' onClick={_cancel}/>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonSet);

