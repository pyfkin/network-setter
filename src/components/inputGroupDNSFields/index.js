import React from 'react';
import {connect} from 'react-redux';
import TextInputWithLabel from '../textFields';


const mapStateToProps = state => ({
    ethernetPreferredDns: state.ethernet.ethernetPreferredDns,
    ethernetAlternativeDns: state.ethernet.ethernetAlternativeDns,

    wirelessPreferredDns: state.wireless.wirelessPreferredDns,
    wirelessAlternativeDns: state.wireless.wirelessAlternativeDns,


});

const mapDispatchToProps = dispatch => ({
    onInputEthernetDnsChanged: (inputName, e) => dispatch({
        type: 'ON_INPUT_ETHERNET_CHANGED',
        payload: {
            inputName,
            inputValue: e.target.value,
        }
    }),
    onInputWirelessDnsChanged: (inputName, e) => dispatch({
        type: 'ON_INPUT_WIRELESS_CHANGED',
        payload: {
            inputName,
            inputValue: e.target.value,
        }
    }),
});


function InputGroupDNSFields({type, isDisabled, onInputEthernetDnsChanged, onInputWirelessDnsChanged}){

    const _onInputChanged = (type, inputName, e) => {
        if (type === 'ethernet') {
            onInputEthernetDnsChanged(inputName, e);
        } else if (type === 'wireless') {
            onInputWirelessDnsChanged(inputName, e);
        }
    };

    let visible = isDisabled ? '' : 'disabled';

    return(
        <div className={`row justify-content-end manual-input-group ${visible}`}>
            <TextInputWithLabel labelText='Preferred DNS server:' mandatory={true} name={`${type}PreferredDns`}
                                onChange={_onInputChanged.bind(null,`${type}`, `${type}PreferredDns`)}/>
            <TextInputWithLabel labelText='Alternative DNS server:' mandatory={false} name={`${type}AlternativeDns`}
                                onChange={_onInputChanged.bind(null, `${type}`, `${type}AlternativeDns`)}/>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(InputGroupDNSFields);