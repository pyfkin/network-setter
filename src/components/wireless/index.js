import React from 'react';
import IpGroups from '../ipGroup';
import DnsGroups from '../dnsGroup';

function Wireless(){
    return(
        <div className='col-6'>
            <h6>Wireless Settings</h6>
            <IpGroups type='wireless'/>
            <DnsGroups type='wireless'/>
        </div>
    );
}


export default Wireless;