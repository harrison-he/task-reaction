import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import taskList from './Reducers/TaskListReducer'

const store = createStore(
    combineReducers({
        taskList
    }),
    applyMiddleware(thunk)
)

export default store