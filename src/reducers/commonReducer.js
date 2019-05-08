import update from 'immutability-helper';


const initialState = {

};

function commonReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        default:
            return state;
    }
}

export default commonReducer;