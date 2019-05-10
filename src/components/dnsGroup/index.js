import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import RadioFields from '../radioFields';
import InputGroupDNSFields from '../inputGroupDNSFields';

import {DnsRadio} from '../../consts/groupTypes';


const mapStateToProps = state => ({
    ethernetDnsAuto: state.ethernet.ethernetDnsAuto,

    wirelessDnsAuto: state.wireless.wirelessDnsAuto,
});


function DnsGroups({value, type, ethernetDnsAuto, wirelessDnsAuto}){

    let isDisabled = true;

    if (type === 'ethernet') {
        isDisabled = !!ethernetDnsAuto;
    } else {
        isDisabled = !!wirelessDnsAuto;
    }

    return(
        <div className='col-12'>
            {DnsRadio.map((item, index) => <RadioFields key={`${type}${index}`} index={index}
                                                        value={item} name={`${type}DnsAuto`}/>)}
            <InputGroupDNSFields type={type} isDisabled={isDisabled}/>
        </div>
    );
}



DnsGroups.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
};

export default connect(mapStateToProps)(DnsGroups);