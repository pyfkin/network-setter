import React from 'react';
import PropTypes from 'prop-types';
import './dropDown.css';
import Icon from './svg-icon';


class DropDownWithLabel extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event)
    {
        event.preventDefault();
        this.setState({displayMenu: true}, () =>
        {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu()
    {
        this.setState({displayMenu: false}, () =>
        {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render()
    {
        let _mandatory = this.props.mandatory ? '*' : '';
        return (
            <div className='row'>
                <label className='col-6 form-label'>{this.props.labelText}<span> {_mandatory}</span></label>
                <div className='col-6'>
                    <div className='row'>
                        <div className='dropdown col-10'>
                            <div className='button ' onClick={this.showDropdownMenu}>Please select</div>

                            {this.state.displayMenu ? (
                                    <ul>
                                        <li><a className='active' href='#Create Page'>Create Page</a></li>
                                        <li><a className='active' href='#Create Page'>Create Page</a></li>
                                    </ul>
                                ) :
                                (
                                    null
                                )
                            }

                        </div>
                        <div className='col-2'>
                            <Icon color='red'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DropDownWithLabel.propTypes = {
    labelText: PropTypes.string,
    mandatory: PropTypes.bool,
    inputValue: PropTypes.string,
    onInputChanged: PropTypes.func,
};

export default DropDownWithLabel;
