import React from 'react';
import PropTypes from 'prop-types';
import RadioFields from '../radioFields';
import InputGroupDNSFields from '../inputGroupDNSFields';

import {Dns} from '../../consts/groupTypes';

// import './';

function DnsGroups({value}){
    let check = false;
    if ((value) === inputDifficultyValue) {
        check = true;
    }
    return(
        <div className='qwsss'>
            {Dns.map((item, index) => <RadioFields key={index} value={item}/>)}
            <InputGroupDNSFields/>
        </div>
    );
}



DnsGroups.propTypes = {

};

export default DnsGroups;