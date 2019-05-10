import React from 'react';
import {connect} from 'react-redux';
import TextInputWithLabel from '../textFields';


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


function InputGroupIPFields({ethernetIp, ethernetMask, ethernetGateway, wirelessIp, wirelessMask, wirelessGateway,
                                type, isDisabled, onInputEthernetIpChanged, onInputWirelessIpChanged}){

    const _onInputChanged = (type, inputName, e) => {
        if (type === 'ethernet') {
            onInputEthernetIpChanged( inputName, e);
        } else if (type === 'wireless') {
            onInputWirelessIpChanged( inputName, e);
        }
    };

    let _ip, _mask, _gateway;
    if (type === 'ethernet') {
        _ip = ethernetIp;
        _mask = ethernetMask;
        _gateway = ethernetGateway;
    } else {
        _ip = wirelessIp;
        _mask = wirelessMask;
        _gateway = wirelessGateway;
    }

    let visible = isDisabled ? '' : 'disabled';

    return(
        <div className={`row justify-content-end manual-input-group ${visible}`}>
            <TextInputWithLabel labelText='IP address:' mandatory={true} name={`${type}Ip`} value={_ip}
                                onChange={_onInputChanged.bind(null, `${type}`, `${type}Ip`)}/>
            <TextInputWithLabel labelText='Subnet Mask:' mandatory={true} name={`${type}Mask`} value={_mask}
                                onChange={_onInputChanged.bind(null,`${type}`, `${type}Mask`)}/>
            <TextInputWithLabel labelText='Default Gateway:' mandatory={false} name={`${type}Gateway`} value={_gateway}
                                onChange={_onInputChanged.bind(null,`${type}`, `${type}Gateway`)}/>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(InputGroupIPFields);