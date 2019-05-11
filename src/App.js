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
    wirelessPreferredDns: state.wireless.wirelessPreferredDns,

    securityKey: state.wireless.securityKey,
    enabledWifi: state.wireless.enabledWifi,
    enabledSecurityKey: state.wireless.enabledSecurityKey,
});


function App({...rest}) {

    const _saveData = (e) => {
        e.preventDefault();
        if (!rest['enabledWifi']) {
            console.log('asdfa fewfewf ew fe');

            dataService.setData(rest);
        } else if (rest['enabledWifi'] && rest['btnText'] !== 'Please select'){
            console.log('asdfa');
        } else {
            return false;
        }
    };

  return (
    <form className='container'  onSubmit={_saveData}>
        <div className='row main'>
            <Ethernet />
            <Wireless />
        </div>
        <ButtonSet />
    </form>
  );
}

export default connect(mapStateToProps)(App);
