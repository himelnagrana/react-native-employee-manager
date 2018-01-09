import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MemberReducer from './MemberReducer';

export default combineReducers({
    auth: AuthReducer,
    members: MemberReducer
});
