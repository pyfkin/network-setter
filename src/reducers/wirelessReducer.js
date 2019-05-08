import update from 'immutability-helper';


const initialState = {
    wirelessIp: '',
    wirelessMask: '',
    wirelessGateway: '',
    wirelessPreferredDns: '',
    wirelessAlternativeDns: '',

    wirelessIpAuto: 0,
    wirelessDnsAuto: 0,
};

function wirelessReducer(state = initialState, action) {
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
        default:
            return state;
    }
}

export default wirelessReducer;