import { combineReducers } from 'redux'
import todos from './Reducer'
import visualFilter from './Filter'

const todo = combineReducers({ 
	todos,
	visualFilter
})
export default todo