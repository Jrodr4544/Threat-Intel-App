import { combineReducers } from 'redux';
import pulsesReducer from './pulsesReducer';
// Need to create and add filter reducer

export default combineReducers({
    pulses: pulsesReducer
})
