import update from 'immutability-helper';
import dataService from '../services/dataService'


const initialState = {
    userSettings: dataService.getData() || {},
    pointsList: [],
    dropStyle: true,
    rotateStyle: false,
};

function commonReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DEFAULTS':
            return update(state, {
                $merge: initialState
            });
        case 'ON_MOUSE_ENTER':
            return update(state, {
                $merge: {
                    dropStyle: false,
                }
            });
        case 'ON_MOUSE_LEAVE':
            return update(state, {
                $merge: {
                    dropStyle: true,
                }
            });
        case 'ON_ROTATE':
            return update(state, {
                $merge: {
                    rotateStyle: true,
                }
            });
        case 'ON_ROTATE_STOP':
            return update(state, {
                $merge: {
                    rotateStyle: false,
                }
            });
        case 'FETCH_COMPLETED':
            return update(state, {
                $merge: {
                    pointsList: action.payload,
                }
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