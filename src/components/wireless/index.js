import React from 'react';
import {connect} from "react-redux";
import CheckBoxInputWithLabel from '../checkBoxFields';
import DropDownWithLabel from '../dropDownWithLabel';
import TextInputWithLabel from '../textFields';
import IpGroups from '../ipGroup';
import DnsGroups from '../dnsGroup';


const mapStateToProps = state => ({
    securityKey: state.wireless.securityKey,
});

const mapDispatchToProps = dispatch => ({
    onSecKeyChanged: (e) => dispatch({
        type: 'ON_SECURITY_KEY_CHANGED',
        payload: e.target.value,
    }),
});


function Wireless({onSecKeyChanged})
{

    return (
        <div className='col-6'>
            <h6>Wireless Settings</h6>

            <CheckBoxInputWithLabel labelText='Enable wifi:'/>
            <div className='col-12 justify-content-end'>
                <DropDownWithLabel labelText='Wireless Network Name' mandatory={true}/>
            </div>
            <CheckBoxInputWithLabel labelText='Enable wireless security:'/>
            <div className='row justify-content-end'>
                <TextInputWithLabel labelText='Security Key:' mandatory={true} name='securityKey'
                                    onChange={onSecKeyChanged}/>
            </div>
            <IpGroups type='wireless'/>
            <DnsGroups type='wireless'/>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Wireless);