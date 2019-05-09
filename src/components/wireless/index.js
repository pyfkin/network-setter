import React from 'react';
import {connect} from "react-redux";
import CheckBoxInputWithLabel from '../checkBoxFields';
import DropDownWithLabel from '../dropDownWithLabel';
import TextInputWithLabel from '../textFields';
import IpGroups from '../ipGroup';
import DnsGroups from '../dnsGroup';


const mapStateToProps = state => ({
    securityKey: state.wireless.securityKey,
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


function Wireless({enabledWifi, enabledSecurityKey, onSecKeyChanged, onEnabledWifiChanged, onEnabledSecKeyChanged})
{
    let visiblePage = enabledWifi ? '' : 'disabled';
    let visibleSecKey = enabledSecurityKey ? '' : 'disabled';
    return (
        <div className='col-6'>
            <h6>Wireless Settings</h6>
            <CheckBoxInputWithLabel name='wireless-main' labelText='Enable wifi:'
                                    onChange={onEnabledWifiChanged}/>
            <div className={`wirelessPage ${visiblePage}`}>
                <div className='col-12 justify-content-end'>
                    <DropDownWithLabel labelText='Wireless Network Name' mandatory={true}/>
                </div>

                <CheckBoxInputWithLabel name='wireless-security' labelText='Enable wireless security:'
                                        onChange={onEnabledSecKeyChanged}/>
                <div className={`row justify-content-end secKey ${visibleSecKey}`}>
                    <TextInputWithLabel labelText='Security Key:' mandatory={true} name='securityKey'
                                        onChange={onSecKeyChanged}/>
                </div>

                <IpGroups type='wireless'/>
                <DnsGroups type='wireless'/>
            </div>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Wireless);