import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER }
from '../actions/types';

const INITIAL_STATE = { loading: false, authenticated: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { 
                ...state, 
                loading: true,
                loginErrorMsg: ''
            };
        case LOGIN_USER_SUCCESS:
            return { 
                ...state, 
                ...INITIAL_STATE,
                authenticated: true,
                loading: false
             };
        case LOGIN_USER_FAIL:
            return { 
                ...state, 
                loading: false ,
                loginErrorMsg: 'Dummy Error occurred, Please try again'
            };
        default:
            return state;
    }
};
