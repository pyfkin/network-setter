import React from 'react';
import PropTypes from 'prop-types';
import RadioFields from '../radioFields';
import InputGroupIPFields from '../inputGroupIPFields';

import {Ip} from '../../consts/groupTypes';

// import './';

function IpGroups({value}){
    return(
        <div className='qwsss'>
            {Ip.map((item, index) => <RadioFields key={index} index={index + 1} value={item}/>)}
            <InputGroupIPFields/>
        </div>
    );
}



IpGroups.propTypes = {

};

export default IpGroups;