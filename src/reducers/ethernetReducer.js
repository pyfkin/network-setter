import update from 'immutability-helper';


const initialState = {
    view: '',
};

function ethernetReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        default:
            return state;
    }
}

export default ethernetReducer;