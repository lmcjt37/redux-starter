import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

/*
* All reducers are combined so they can be passed to the store
*/

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers
