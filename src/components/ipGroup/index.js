import React from 'react';
import PropTypes from 'prop-types';
import RadioFields from '../radioFields';
import InputGroupIPFields from '../inputGroupIPFields';

import {IpRadio} from '../../consts/groupTypes';


function IpGroups({value, type}){
    return(
        <div className='col-12'>
            {IpRadio.map((item, index) => <RadioFields key={`${type}${index}`} index={index}
                                                       value={item} name={`${type}IpAuto`}/>)}
            <InputGroupIPFields type={type}/>
        </div>
    );
}



IpGroups.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
};

export default IpGroups;