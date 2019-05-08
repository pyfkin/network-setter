import React from 'react';
import PropTypes from 'prop-types';
import IpGroups from '../ipGroup';
import DnsGroups from '../DnsGroup';
import './ethernet.css';

function Ethernet(){
    return(
        <div>
            <h2>Ethernet Settings</h2>
            <IpGroups/>
            <DnsGroups/>
        </div>
    );
}



Ethernet.propTypes = {

};

export default Ethernet;