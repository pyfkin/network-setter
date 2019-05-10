import React from 'react';
import IpGroups from '../ipGroup';
import DnsGroups from '../dnsGroup';

function Ethernet(){
    return(
        <div className='col-6 ethernet'>
            <h6>Ethernet Settings</h6>
            <IpGroups type='ethernet'/>
            <DnsGroups type='ethernet'/>
        </div>
    );
}


export default Ethernet;