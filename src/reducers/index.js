import {combineReducers} from 'redux';

import common from './commonReducer';
import ethernet from './ethernetReducer';
import wireless from './wirelessReducer';

export default combineReducers({common, ethernet, wireless});

