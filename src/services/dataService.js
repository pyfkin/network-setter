class CheckData
{

    setData(rest){
        let obj = {
            btnText: rest['btnText'],
            selectedItem: rest['selectedItem'],
            ethernetIp: rest['ethernetIp'],
            ethernetMask: rest['ethernetMask'],
            ethernetGateway: rest['ethernetGateway'],
            wirelessIp: rest['wirelessIp'],
            wirelessMask: rest['wirelessMask'],
            wirelessGateway: rest['wirelessGateway'],
            ethernetIpAuto: rest['ethernetIpAuto'],
            ethernetDnsAuto:rest['.ethernetDnsAuto'],
            wirelessIpAuto: rest['wirelessIpAuto'],
            wirelessDnsAuto: rest['wirelessDnsAuto'],
            ethernetPreferredDns: rest['ethernetPreferredDns'],
            wirelessPreferredDns: rest['wirelessPreferredDns'],
            securityKey: rest['securityKey'],
            enabledWifi: rest['enabledWifi'],
            enabledSecurityKey: rest['enabledSecurityKey'],
        };

        console.log(obj);
        let serialObj = JSON.stringify(obj);
        localStorage.setItem("userSettings", serialObj);
    }

    getData(){
        return JSON.parse(localStorage.getItem("userSettings"));
    }
}

export default new CheckData();