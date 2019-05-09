import React from 'react';
import {connect} from 'react-redux';
import InputFields from '../inputFields';


const mapStateToProps = state => ({
    ethernetIp: state.ethernet.ethernetIp,
    ethernetMask: state.ethernet.ethernetMask,
    ethernetGateway: state.ethernet.ethernetGateway,

    wirelessIp: state.wireless.wirelessIp,
    wirelessMask: state.wireless.wirelessMask,
    wirelessGateway: state.wireless.wirelessGateway,
});

const mapDispatchToProps = dispatch => ({
    onInputEthernetIpChanged: (inputName, e) => dispatch({
        type: 'ON_INPUT_ETHERNET_CHANGED',
        payload: {
            inputName,
            inputValue: e.target.value,
        }
    }),
    onInputWirelessIpChanged: (inputName, e) => dispatch({
        type: 'ON_INPUT_WIRELESS_CHANGED',
        payload: {
            inputName,
            inputValue: e.target.value,
        }
    }),
});


function InputGroupIPFields({type, isDisabled, onInputEthernetIpChanged, onInputWirelessIpChanged}){

    const _onInputChanged = (type, inputName, e) => {
        if (type === 'ethernet') {
            onInputEthernetIpChanged( inputName, e);
        } else if (type === 'wireless') {
            onInputWirelessIpChanged( inputName, e);
        }
    };

    console.log(isDisabled, type);

    let visible = isDisabled ? '' : 'disabled';

    return(
        <div className={`row justify-content-end manual-input-group ${visible}`}>
            <InputFields labelText='IP address:' mandatory={true} name={`${type}Ip`}
                         onChange={_onInputChanged.bind(null, `${type}`, `${type}Ip`)}/>
            <InputFields labelText='Subnet Mask:' mandatory={true} name={`${type}Mask`}
                         onChange={_onInputChanged.bind(null,`${type}`, `${type}Mask`)}/>
            <InputFields labelText='Default Gateway:' mandatory={false} name={`${type}Gateway`}
                         onChange={_onInputChanged.bind(null,`${type}`, `${type}Gateway`)}/>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(InputGroupIPFields);