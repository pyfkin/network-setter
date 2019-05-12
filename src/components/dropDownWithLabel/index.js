import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Icon from './svg-icon';
import './dropDown.css';


const mapStateToProps = state => ({
    btnText: state.wireless.btnText,
    wifiNameRequired: state.wireless.wifiNameRequired,
    displayMenu: state.wireless.displayMenu,
    selectedItem: state.wireless.selectedItem,

    dropStyle: state.common.dropStyle,
    rotateStyle: state.common.rotateStyle,

    pointsList: state.common.pointsList,
});

const mapDispatchToProps = dispatch => ({
    onFetchPointsList: () => dispatch({
        type: 'FETCH_PLAYER_LIST',
    }),
    onShowHideDropdownMenu: () => dispatch({
        type: 'ON_SHOW_HIDE_MENU',
    }),
    onSelectItem: (item) => dispatch({
        type: 'ON_SELECT_ITEM',
        payload: {
            item,
            btnNewText: item.name,
        },
    }),
    MouseEnter: () => dispatch({
        type: 'ON_MOUSE_ENTER',
    }),
    MouseLeave: () => dispatch({
        type: 'ON_MOUSE_LEAVE',
    }),
    RotateStart: () => dispatch({
        type: 'ON_ROTATE',
    }),
    RotateStop: () => dispatch({
        type: 'ON_ROTATE_STOP',
    }),
});


function DropDownWithLabel({
                               mandatory, labelText, displayMenu, btnText, wifiNameRequired, dropStyle, pointsList,
                               rotateStyle, onFetchPointsList, onShowHideDropdownMenu, onSelectItem, MouseLeave,
                               MouseEnter, RotateStart, RotateStop
                           })
{

    let _dropStyle = dropStyle ? 'down' : 'up';
    let _rotate = rotateStyle ? 'rotate-in-center' : '';

    const _selectItem = (item) =>
    {
        onSelectItem(item);
        MouseLeave();
    };

    const _onDropStyleChange = () =>
    {
        dropStyle ? MouseEnter() : MouseLeave();
        onShowHideDropdownMenu();
    };

    const _onRotate = () =>
    {
        RotateStart();
        onFetchPointsList();
        setTimeout(RotateStop, 600);
    };

    const _sortDevicesByFavouriteAndStrength = (a, b) =>
    {
        let aFavourite = a.favorite,
            bFavourite = b.favorite;
        if (aFavourite !== b.favorite)
            return aFavourite < bFavourite ? 1 : -1;
        else
            return b.strength - a.strength;
    };

    let _mandatory = mandatory ? '*' : '';

    let _pointsList = pointsList.map(item => item);
    let body = _pointsList.sort(_sortDevicesByFavouriteAndStrength).map((item, index) =>
        <li key={index} onClick={() => _selectItem(item)}>{item.name}</li>
    );

    return (
        <div className='row'>
            <label className='col-6 form-label'>{labelText}<span> {_mandatory}</span></label>
            <div className='col-6'>
                <div className='row cover-dropdown'>
                    <div className='dropdown col-9' onClick={_onDropStyleChange}>
                        <div className={`${_dropStyle} button`}>{btnText}</div>
                        {
                            displayMenu &&
                            <ul className='wireless-list'>
                                {body}
                            </ul>
                        }
                    </div>
                    <div className={`${_rotate} user-icon svg-border`}>
                        <Icon color='red' onClick={_onRotate}/>
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
