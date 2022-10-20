import { combineReducers } from 'redux';
import pulsesReducer from './pulsesReducer';
import filtersReducer from './filtersReducer';
// Need to create and add filter reducer

export default combineReducers({
    pulses: pulsesReducer,
    filters: filtersReducer
})
