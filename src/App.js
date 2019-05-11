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


function App({...rest})
{

    const _saveData = (e) =>
    {
        e.preventDefault();
        if (!rest['enabledWifi'] || (rest['enabledWifi'] && rest['btnText'] !== 'Please select')) {
            if (rest['ethernetIpAuto']) {
                dataService.validateIPaddress(rest['ethernetIp'], 'Ethernet Ip address');
                dataService.validateIPaddress(rest['ethernetMask'], 'Ethernet Subnet Mask');
                dataService.validateIPaddress(rest['ethernetGateway'], 'Ethernet Default Gateway');
            }
            if (rest['ethernetDnsAuto']) {
                dataService.validateIPaddress(rest['ethernetPreferredDns'], 'Ethernet Preferred DNS server');
                dataService.validateIPaddress(rest['ethernetAlternativeDns'], 'Ethernet Alternative DNS server');
            }
            if (rest['wirelessIpAuto']) {
                dataService.validateIPaddress(rest['wirelessIp'], 'Wireless Ip address');
                dataService.validateIPaddress(rest['wirelessMask'], 'Wireless Subnet Mask');
                dataService.validateIPaddress(rest['wirelessGateway'], 'Wireless Default Gateway');
            }
            if (rest['wirelessDnsAuto']) {
                dataService.validateIPaddress(rest['wirelessPreferredDns'], 'Wireless Preferred DNS server');
                dataService.validateIPaddress(rest['wirelessAlternativeDns'], 'Wireless Alternative DNS server');
            }
            if (rest['enabledWifi']){

            }

                dataService.setData(rest);
        } else {
            return false;
        }
    };

    return (
        <form className='container' onSubmit={_saveData}>
            <div className='row main'>
                <Ethernet/>
                <Wireless/>
            </div>
            <ButtonSet/>
        </form>
    );
}

export default connect(mapStateToProps)(App);
