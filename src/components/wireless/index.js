import React from 'react';
import PropTypes from 'prop-types';
import IpGroups from '../ipGroup';
import DnsGroups from '../DnsGroup';
import './wireless.css';

function Wireless(){
    return(
        <div>
            <h2>Wireless Settings</h2>
            <IpGroups/>
            <DnsGroups/>
        </div>
    );
}



Wireless.propTypes = {

};

export default Wireless;