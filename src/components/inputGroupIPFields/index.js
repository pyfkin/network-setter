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

    ethernetIpRequired: state.ethernet.ethernetIpRequired,
    ethernetMaskRequired: state.ethernet.ethernetMaskRequired,
    wirelessIpRequired: state.wireless.wirelessIpRequired,
    wirelessMaskRequired: state.wireless.wirelessMaskRequired,
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
                                type, isDisabled, onInputEthernetIpChanged, onInputWirelessIpChanged,
                                ethernetIpRequired, ethernetMaskRequired, wirelessIpRequired, wirelessMaskRequired}){

    const _onInputChanged = (type, inputName, e) => {
        if (type === 'ethernet') {
            onInputEthernetIpChanged( inputName, e);
        } else if (type === 'wireless') {
            onInputWirelessIpChanged( inputName, e);
        }
    };

    let _ip, _mask, _gateway,
        _requiredIp, _requiredMask;
    if (type === 'ethernet') {
        _ip = ethernetIp;
        _mask = ethernetMask;
        _gateway = ethernetGateway;
        _requiredIp =  ethernetIpRequired;
        _requiredMask =  ethernetMaskRequired;

    } else {
        _ip = wirelessIp;
        _mask = wirelessMask;
        _gateway = wirelessGateway;
        _requiredIp =  wirelessIpRequired;
        _requiredMask =  wirelessMaskRequired;
    }

    let visible = isDisabled ? '' : 'disabled';

    return(
        <div className={`row justify-content-end manual-input-group ${visible}`}>
            <TextInputWithLabel labelText='IP address:' mandatory={true} name={`${type}Ip`} value={_ip}
                                isRequired={_requiredIp} onChange={_onInputChanged.bind(null, `${type}`, `${type}Ip`)}/>
            <TextInputWithLabel labelText='Subnet Mask:' mandatory={true} name={`${type}Mask`} value={_mask}
                                isRequired={_requiredMask} onChange={_onInputChanged.bind(null,`${type}`, `${type}Mask`)}/>
            <TextInputWithLabel labelText='Default Gateway:' mandatory={false} name={`${type}Gateway`} value={_gateway}
                                isRequired={false} onChange={_onInputChanged.bind(null,`${type}`, `${type}Gateway`)}/>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(InputGroupIPFields);