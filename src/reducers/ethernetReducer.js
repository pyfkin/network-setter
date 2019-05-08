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
        default:
            return state;
    }
}

export default ethernetReducer;