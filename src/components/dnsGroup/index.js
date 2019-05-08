import React from 'react';
import PropTypes from 'prop-types';
import RadioFields from '../radioFields';
import InputGroupDNSFields from '../inputGroupDNSFields';

import {DnsRadio} from '../../consts/groupTypes';


function DnsGroups({value, type}){
    return(
        <div className='col-12'>
            {DnsRadio.map((item, index) => <RadioFields key={`${type}${index}`} index={index + 1}
                                                        value={item} name={`${type}dns`}/>)}
            <InputGroupDNSFields type={type}/>
        </div>
    );
}



DnsGroups.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
};

export default DnsGroups;