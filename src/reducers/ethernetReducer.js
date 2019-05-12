import update from 'immutability-helper';


const initialState = {
    ethernetIp: '',
    ethernetIpRequired: false,
    ethernetMask: '',
    ethernetMaskRequired: false,
    ethernetGateway: '',
    ethernetPreferredDns: '',
    ethernetPreferredDnsRequired: false,
    ethernetAlternativeDns: '',

    ethernetIpAuto: 0,
    ethernetDnsAuto: 0,
};

function ethernetReducer(state = initialState, action)
{
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
        case 'REQUIRED_ETHERNET_CHANGED':
            if (action.payload.key === 'Ip') {
                return update(state, {
                    $merge: {
                        ethernetIpRequired: !state.ethernetIpRequired,
                        ethernetMaskRequired: !state.ethernetMaskRequired,
                    }
                })
            } else {
                return update(state, {
                    $merge: {
                        ethernetPreferredDnsRequired: !state.ethernetPreferredDnsRequired,
                    }
                })
            }
        case 'ON_UPDATE_ETHERNET_FROM_LOCAL_STORAGE':
            return update(state, {
                $merge: action.payload,
            });
        default:
            return state;
    }
}

export default ethernetReducer;