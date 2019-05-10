import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import RadioFields from '../radioFields';
import InputGroupIPFields from '../inputGroupIPFields';

import {IpRadio} from '../../consts/groupTypes';


const mapStateToProps = state => ({
    ethernetIpAuto: state.ethernet.ethernetIpAuto,

    wirelessIpAuto: state.wireless.wirelessIpAuto,
});


function IpGroups({value, type, ethernetIpAuto, wirelessIpAuto})
{
    let isDisabled = true;

    if (type === 'ethernet') {
        isDisabled = !!ethernetIpAuto;
    } else {
        isDisabled = !!wirelessIpAuto;
    }

    return (
        <div className='col-12'>
            {IpRadio.map((item, index) => <RadioFields key={`${type}${index}`} index={index}
                                                       value={item} name={`${type}IpAuto`}/>)}
            <InputGroupIPFields type={type} isDisabled={isDisabled}/>
        </div>
    );
}


IpGroups.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
};

export default connect(mapStateToProps)(IpGroups);