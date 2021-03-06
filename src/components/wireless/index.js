import React from 'react';
import {connect} from "react-redux";
import CheckBoxInputWithLabel from '../checkBoxFields';
import DropDownWithLabel from '../dropDownWithLabel';
import TextInputWithLabel from '../textFields';
import IpGroups from '../ipGroup';
import DnsGroups from '../dnsGroup';


const mapStateToProps = state => ({
    wirelessIp: state.wireless.wirelessIp,
    wirelessMask: state.wireless.wirelessMask,
    wirelessGateway: state.wireless.wirelessGateway,
    wirelessPreferredDns: state.wireless.wirelessPreferredDns,
    wirelessAlternativeDns: state.wireless.wirelessAlternativeDns,

    wirelessIpAuto: state.wireless.wirelessIpAuto,
    wirelessDnsAuto: state.wireless.wirelessDnsAuto,

    securityKey: state.wireless.securityKey,
    securityKeyRequired: state.wireless.securityKeyRequired,
    enabledWifi: state.wireless.enabledWifi,
    enabledSecurityKey: state.wireless.enabledSecurityKey,
});

const mapDispatchToProps = dispatch => ({
    onSecKeyChanged: (e) => dispatch({
        type: 'ON_SECURITY_KEY_CHANGED',
        payload: e.target.value,
    }),
    onEnabledWifiChanged: () => dispatch({
        type: 'ON_ENABLED_WIFI_CHANGED',
    }),
    onEnabledSecKeyChanged: () => dispatch({
        type: 'ON_ENABLED_SECURITY_KEY_CHANGED',
    }),
});


function Wireless({
                      enabledWifi, enabledSecurityKey, wirelessIp, wirelessMask, wirelessGateway, wirelessPreferredDns,
                      wirelessAlternativeDns, wirelessIpAuto, wirelessDnsAuto, securityKey,
                      securityKeyRequired, onSecKeyChanged, onEnabledWifiChanged, onEnabledSecKeyChanged
                  }) {
    let _visiblePage = enabledWifi ? '' : 'disabled';
    let _visibleSecKey = enabledSecurityKey ? '' : 'disabled';
    return (
        <div className='col-6 wireless'>
            <h6>Wireless Settings</h6>
            <CheckBoxInputWithLabel name='wireless-main' labelText='Enable wifi:' value={enabledWifi}
                                    onChange={onEnabledWifiChanged}/>
            <div className={`wirelessPage ${_visiblePage}`}>
                <div className='col-12 justify-content-end'>
                    <DropDownWithLabel labelText='Wireless Network Name' mandatory={true}/>
                </div>

                <CheckBoxInputWithLabel name='wireless-security' labelText='Enable wireless security:'
                                        value={enabledSecurityKey}
                                        onChange={onEnabledSecKeyChanged}/>
                <div className='col-12'>
                    <div className={`row justify-content-end secKey ${_visibleSecKey}`}>
                        <TextInputWithLabel labelText='Security Key:' mandatory={true} name='securityKey'
                                            isRequired={securityKeyRequired} value={securityKey} onChange={onSecKeyChanged}/>
                    </div>
                </div>

                <IpGroups type='wireless'/>
                <DnsGroups type='wireless'/>
            </div>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Wireless);