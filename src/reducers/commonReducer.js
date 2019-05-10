import update from 'immutability-helper';
import dataService from '../services/dataService'


const initialState = {
    userSettings: dataService.getData() || {},
};

function commonReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'FETCH_SAVED_DATA':
            return update(state, {
                $merge: {
                    userSettings: dataService.getData() || {},
                }
            });
        default:
            return state;
    }
}

export default commonReducer;