import { combineReducers } from 'redux';
import { data_reducer } from './reducers/data_reducer'

export default combineReducers({
    data: data_reducer
})

