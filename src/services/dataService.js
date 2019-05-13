class CheckData {
    setDataToLocalStorage(rest) {
        let obj = {
            ethernet: {
                ethernetIpAuto: rest['ethernetIpAuto'],
                ethernetIp: rest['ethernetIp'],
                ethernetIpRequired: rest['ethernetIpRequired'],
                ethernetMask: rest['ethernetMask'],
                ethernetMaskRequired: rest['ethernetMaskRequired'],
                ethernetGateway: rest['ethernetGateway'],

                ethernetDnsAuto: rest['ethernetDnsAuto'],
                ethernetPreferredDns: rest['ethernetPreferredDns'],
                ethernetPreferredDnsRequired: rest['ethernetPreferredDnsRequired'],
                ethernetAlternativeDns: rest['ethernetAlternativeDns'],
            },
            wireless: {
                enabledWifi: rest['enabledWifi'],
                btnText: rest['btnText'],
                selectedItem: rest['selectedItem'],
                wifiNameRequired: rest['wifiNameRequired'],
                displayMenu: rest['displayMenu'],

                enabledSecurityKey: rest['enabledSecurityKey'],
                securityKey: rest['securityKey'],
                securityKeyRequired: rest['securityKeyRequired'],

                wirelessIpAuto: rest['wirelessIpAuto'],
                wirelessIp: rest['wirelessIp'],
                wirelessIpRequired: rest['wirelessIpRequired'],
                wirelessMask: rest['wirelessMask'],
                wirelessMaskRequired: rest['wirelessMaskRequired'],
                wirelessGateway: rest['wirelessGateway'],

                wirelessDnsAuto: rest['wirelessDnsAuto'],
                wirelessPreferredDns: rest['wirelessPreferredDns'],
                wirelessPreferredDnsRequired: rest['wirelessPreferredDnsRequired'],
                wirelessAlternativeDns: rest['wirelessAlternativeDns'],
            },
        };
        let serialObj = JSON.stringify(obj);
        localStorage.setItem("userSettings", serialObj);
    }

    getDataFromLocalSrorage() {
        let uSettings = JSON.parse(localStorage.getItem("userSettings")) || {};
        console.log(uSettings);
        return JSON.parse(localStorage.getItem("userSettings")) || {};
    }

    validateIPaddress(ipaddress, field) {
        if (ipaddress === '' || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return true;
        }
        alert(`You have entered an invalid ${field}!`);
        return false;
    }
}

export default new CheckData();