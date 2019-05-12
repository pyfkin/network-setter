class CheckData
{
    setDataToLocalStorage(rest)
    {
        let obj = {
            ethernet: {
                ethernetIpAuto: rest['ethernetIpAuto'],
                ethernetIp: rest['ethernetIp'],
                ethernetMask: rest['ethernetMask'],
                ethernetGateway: rest['ethernetGateway'],

                ethernetDnsAuto: rest['ethernetDnsAuto'],
                ethernetPreferredDns: rest['ethernetPreferredDns'],
                ethernetAlternativeDns: rest['ethernetAlternativeDns'],
            },
            wireless: {
                enabledWifi: rest['enabledWifi'],
                btnText: rest['btnText'],
                selectedItem: rest['selectedItem'],

                enabledSecurityKey: rest['enabledSecurityKey'],
                securityKey: rest['securityKey'],

                wirelessIpAuto: rest['wirelessIpAuto'],
                wirelessIp: rest['wirelessIp'],
                wirelessMask: rest['wirelessMask'],
                wirelessGateway: rest['wirelessGateway'],

                wirelessDnsAuto: rest['wirelessDnsAuto'],
                wirelessPreferredDns: rest['wirelessPreferredDns'],
                wirelessAlternativeDns: rest['wirelessAlternativeDns'],
            },
        };
        let serialObj = JSON.stringify(obj);
        localStorage.setItem("userSettings", serialObj);
    }

    getDataFromLocalSrorage()
    {
        let uSettings = JSON.parse(localStorage.getItem("userSettings")) || {};
        console.log(uSettings);
        return JSON.parse(localStorage.getItem("userSettings")) || {};
    }

    validateIPaddress(ipaddress, field)
    {
        if (ipaddress === '' || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return true;
        }
        alert(`You have entered an invalid ${field}!`);
        return false;
    }
}

export default new CheckData();