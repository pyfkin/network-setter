import update from 'immutability-helper';


const initialState = {
    ethernetIp: '',
    ethernetMask: '',
    ethernetGateway: '',
    ethernetPreferredDns: '',
    ethernetAlternativeDns: '',

    ethernetIpAuto: 0,
    ethernetDnsAuto: 0,
};

function ethernetReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'ON_INPUT_ETHERNET_CHANGED':
            return update(state, {
                $merge: {
                    [`${action.payload.inputName}`]: action.payload.inputValue,
                }
            });
        case 'ETHERNET_IP_RADIO_VALUE_CHANGED':
            return update(state, {
                $merge: {
                    ethernetIpAuto: action.payload,
                }
            });
        case 'ETHERNET_DNS_RADIO_VALUE_CHANGED':
            return update(state, {
                $merge: {
                    ethernetDnsAuto: action.payload,
                }
            });
        default:
            return state;
    }
}

export default ethernetReducer;