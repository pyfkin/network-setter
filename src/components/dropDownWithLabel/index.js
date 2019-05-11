import React from 'react';
import PropTypes from 'prop-types';
import mock from '../../db/mock';
import Icon from './svg-icon';
import connect from "react-redux/es/connect/connect";
import './dropDown.css';


const mapStateToProps = state => ({
    btnText: state.wireless.btnText,
    wifiNameRequired: state.wireless.wifiNameRequired,
    displayMenu: state.wireless.displayMenu,
    selectedItem: state.wireless.selectedItem,
});

const mapDispatchToProps = dispatch => ({
    onShowHideDropdownMenu: () => dispatch({
        type: 'ON_SHOW_HIDE_MENU',
    }),
    onSelectItem: (item) => dispatch({
        type: 'ON_SELECT_ITEM',
        payload: {
            item,
            btnNewText: item.name,
        },
    })
});


function DropDownWithLabel({mandatory, labelText, displayMenu, btnText, wifiNameRequired,
                               onShowHideDropdownMenu, onSelectItem}) {

    const _selectItem = (item) => {
        onSelectItem(item);
        onShowHideDropdownMenu();
    };

    const _sortDevicesByFavouriteAndStrength = (a, b) => {
        let aFavourite = a.favorite,
            bFavourite = b.favorite;
        if (aFavourite !== b.favorite)
            return aFavourite < bFavourite ? 1 : -1;
        else
            return b.strength - a.strength;
    };

    let _mandatory = mandatory ? '*' : '';
    let body = mock.sort(_sortDevicesByFavouriteAndStrength).map((item, index) =>
        <li key={index} onClick={() => _selectItem(item)}>{item.name}</li>
    );

    return (
        <div className='row'>
            <label className='col-6 form-label'>{labelText}<span> {_mandatory}</span></label>
            <div className='col-6'>
                <div className='row cover-dropdown'>
                    <div className='dropdown col-9'>
                        <div className='button' onClick={onShowHideDropdownMenu}>{btnText}</div>

                        {displayMenu &&
                        <ul>
                            {body}
                        </ul>
                        }
                    </div>
                    <div className='col-2 user-icon svg-border'>
                        <Icon color='red' onClick={() => console.log('fdsgfewrr')}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

DropDownWithLabel.propTypes = {
    labelText: PropTypes.string,
    mandatory: PropTypes.bool,
    inputValue: PropTypes.string,
    onInputChanged: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownWithLabel);
