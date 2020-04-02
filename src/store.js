import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'

import entryReducer from './reducers/entryReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
	entries: entryReducer,
	filter: filterReducer
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store