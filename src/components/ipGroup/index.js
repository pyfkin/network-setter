import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import RadioFields from '../radioFields';
import InputGroupIPFields from '../inputGroupIPFields';

import {IpRadio} from '../../consts/groupTypes';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});



function IpGroups({value, type}){
    return(
        <div className='col-12'>
            {IpRadio.map((item, index) => <RadioFields key={`${type}${index}`} index={index + 1}
                                                       value={item} name={`${type}ip`}/>)}
            <InputGroupIPFields type={type}/>
        </div>
    );
}



IpGroups.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(IpGroups);