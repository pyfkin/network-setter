import React from 'react';
import {connect} from 'react-redux';
import dataService from './services/dataService';
import Ethernet from './components/ethernet';
import Wireless from './components/wireless';
import ButtonSet from './components/buttonSet';

import './App.css';


const mapStateToProps = state => ({
    btnText: state.wireless.btnText,
    selectedItem: state.wireless.selectedItem,

    ethernetIp: state.ethernet.ethernetIp,
    ethernetMask: state.ethernet.ethernetMask,
    ethernetGateway: state.ethernet.ethernetGateway,

    wirelessIp: state.wireless.wirelessIp,
    wirelessMask: state.wireless.wirelessMask,
    wirelessGateway: state.wireless.wirelessGateway,

    ethernetIpAuto: state.ethernet.ethernetIpAuto,
    ethernetDnsAuto: state.ethernet.ethernetDnsAuto,

    wirelessIpAuto: state.wireless.wirelessIpAuto,
    wirelessDnsAuto: state.wireless.wirelessDnsAuto,

    ethernetPreferredDns: state.ethernet.ethernetPreferredDns,
    ethernetAlternativeDns: state.ethernet.ethernetAlternativeDns,

    wirelessPreferredDns: state.wireless.wirelessPreferredDns,
    wirelessAlternativeDns: state.wireless.wirelessAlternativeDns,

    securityKey: state.wireless.securityKey,
    enabledWifi: state.wireless.enabledWifi,
    enabledSecurityKey: state.wireless.enabledSecurityKey,
});

const mapDispatchToProps = dispatch => ({
    onUpdateEthernetFromLocalStorage: (localStorageData) => dispatch({
        type: 'ON_UPDATE_ETHERNET_FROM_LOCAL_STORAGE',
        payload: localStorageData,
    }),
    onUpdateWirelessFromLocalStorage: (localStorageData) => dispatch({
        type: 'ON_UPDATE_WIRELESS_FROM_LOCAL_STORAGE',
        payload: localStorageData,
    }),

});


class App extends React.Component
{
    _saveData = (e) =>
    {
        e.preventDefault();
        let {...rest} = this.props;
        let isValidated = true;
        if (rest['ethernetIpAuto']) {
            isValidated =
                dataService.validateIPaddress(rest['ethernetIp'], 'Ethernet Ip address') &&
                dataService.validateIPaddress(rest['ethernetMask'], 'Ethernet Subnet Mask') &&
                dataService.validateIPaddress(rest['ethernetGateway'], 'Ethernet Default Gateway');
        }
        if (isValidated && rest['ethernetDnsAuto']) {
            isValidated =
                dataService.validateIPaddress(rest['ethernetPreferredDns'], 'Ethernet Preferred DNS server') &&
                dataService.validateIPaddress(rest['ethernetAlternativeDns'], 'Ethernet Alternative DNS server');
        }
        if (isValidated && rest['enabledWifi']) {
            if (isValidated && rest['btnText'] !== 'Please select' && Object.keys(rest['selectedItem']).length !== 0) {
                isValidated = true;
            } else {
                alert(`You didn't choose Network Name!`);
                return false;
            }
            if (isValidated && rest['wirelessIpAuto']) {
                isValidated =
                    dataService.validateIPaddress(rest['wirelessIp'], 'Wireless Ip address') &&
                    dataService.validateIPaddress(rest['wirelessMask'], 'Wireless Subnet Mask') &&
                    dataService.validateIPaddress(rest['wirelessGateway'], 'Wireless Default Gateway');
            }
            if (isValidated && rest['wirelessDnsAuto']) {
                isValidated =
                    dataService.validateIPaddress(rest['wirelessPreferredDns'], 'Wireless Preferred DNS server') &&
                    dataService.validateIPaddress(rest['wirelessAlternativeDns'], 'Wireless Alternative DNS server');
            }
        }
        if (isValidated) {
            dataService.setDataToLocalStorage(rest);
            alert(`New data saved successfully!`);
        } else {
            alert(`Update canceled!`);
        }
    };

    componentWillMount()
    {
        const {onUpdateEthernetFromLocalStorage, onUpdateWirelessFromLocalStorage} = this.props;
        const savedData = dataService.getDataFromLocalSrorage();
        if (Object.keys(savedData).length) {
            console.log('sadf');
            onUpdateEthernetFromLocalStorage(savedData.ethernet);
            onUpdateWirelessFromLocalStorage(savedData.wireless);
        }
    };

    render()
    {
        return (
            <form className='container' onSubmit={this._saveData}>
                <div className='row main'>
                    <Ethernet/>
                    <Wireless/>
                </div>
                <ButtonSet/>
            </form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
