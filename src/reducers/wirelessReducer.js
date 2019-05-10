import update from 'immutability-helper';


const initialState = {
    wirelessIp: '',
    wirelessMask: '',
    wirelessGateway: '',
    wirelessPreferredDns: '',
    wirelessAlternativeDns: '',

    wirelessIpAuto: 0,
    wirelessDnsAuto: 0,

    securityKey: '',

    enabledWifi: false,
    enabledSecurityKey: false,

    displayMenu: false,
    selectedItem: {},
    btnText: 'Please select',
};

function wirelessReducer(state = initialState, action)
{
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'ON_INPUT_WIRELESS_CHANGED':
            return update(state, {
                $merge: {
                    [`${action.payload.inputName}`]: action.payload.inputValue,
                }
            });
        case 'WIRELESS_IP_RADIO_VALUE_CHANGED':
            return update(state, {
                $merge: {
                    wirelessIpAuto: action.payload,
                }
            });
        case 'WIRELESS_DNS_RADIO_VALUE_CHANGED':
            return update(state, {
                $merge: {
                    wirelessDnsAuto: action.payload,
                }
            });
        case 'ON_SECURITY_KEY_CHANGED':
            return update(state, {
                $merge: {
                    securityKey: action.payload,
                }
            });
        case 'ON_ENABLED_WIFI_CHANGED':
            return update(state, {
                $merge: {
                    enabledWifi: !state.enabledWifi,
                }
            });
        case 'ON_ENABLED_SECURITY_KEY_CHANGED':
            return update(state, {
                $merge: {
                    enabledSecurityKey: !state.enabledSecurityKey,
                }
            });
        case 'ON_SELECT_ITEM':
            return update(state, {
                $merge: {
                    selectedItem: action.payload.item,
                    btnText: action.payload.btnNewText,
                }
            });
        case 'ON_SHOW_HIDE_MENU':
            return update(state, {
                $merge: {
                    displayMenu: !state.displayMenu,
                }
            });
        default:
            return state;
    }
}

export default wirelessReducer;