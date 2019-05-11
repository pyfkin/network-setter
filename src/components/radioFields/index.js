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
    ethernetIpAutoValueChanged: (index) => dispatch({
        type: 'ETHERNET_IP_RADIO_VALUE_CHANGED',
        payload: index,
    }),
    ethernetDnsAutoValueChanged: (index) => dispatch({
        type: 'ETHERNET_DNS_RADIO_VALUE_CHANGED',
        payload: index,
    }),
    wirelessIpAutoValueChanged: (index) => dispatch({
        type: 'WIRELESS_IP_RADIO_VALUE_CHANGED',
        payload: index,
    }),
    wirelessDnsAutoValueChanged: (index) => dispatch({
        type: 'WIRELESS_DNS_RADIO_VALUE_CHANGED',
        payload: index,
    }),
    requiredEthernetChanged: (_key) => dispatch({
        type: 'REQUIRED_ETHERNET_CHANGED',
        payload: {
            key: _key
        }
    }),
    requiredWirelessChanged: (_key) => dispatch({
        type: 'REQUIRED_WIRELESS_CHANGED',
        payload: {
            key: _key
        }
    })
});

function RadioFields({value, index, name,
                         requiredEthernetChanged, requiredWirelessChanged,
                         ethernetIpAutoValueChanged, ethernetDnsAutoValueChanged,
                         wirelessIpAutoValueChanged, wirelessDnsAutoValueChanged, ...rest})
{
    let check = false;
    if ((index) === rest[name]) {
        check = true;
    }

    const _autoTypeValueChanged = (_name) =>
    {
        switch (_name) {
            case 'ethernetIpAuto':
                ethernetIpAutoValueChanged(index);
                requiredEthernetChanged('Ip');
                break;
            case 'ethernetDnsAuto':
                ethernetDnsAutoValueChanged(index);
                requiredEthernetChanged('Dns');
                break;
            case 'wirelessIpAuto':
                wirelessIpAutoValueChanged(index);
                requiredWirelessChanged('Ip');
                break;
            case 'wirelessDnsAuto':
                wirelessDnsAutoValueChanged(index);
                requiredWirelessChanged('Dns');
                break;
            default:
                break;
        }
    };

    return (
        <div className='form-check'>
            <label className='form-check-label' htmlFor={`${name}${index}`}>
                <input className='form-check-input' type='radio' name={name} id={`${name}${index}`}
                       value={index} onChange={_autoTypeValueChanged.bind(null, name)}
                       checked={check} />
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