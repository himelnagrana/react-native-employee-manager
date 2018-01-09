import { NavigationActions } from 'react-navigation';
import { navigateTo } from '../GlobalNavigator';

import {
    MEMBER_UPDATE,
    MEMBER_CREATE,
    MEMBER_DELETE,
    MEMBER_READ,
    MEMBER_LIST_UPDATE_SUCCESS,
    MEMBER_FETCH_SUCCESS,
    MEMBER_SAVE_SUCCESS
} from './types';


export const createMember = (emp) => {
    emp.id = Date.now();
    return (dispatch) => {
        dispatch({
            type: MEMBER_CREATE,
            payload: emp
        });
        navigateTo('Member');
    };
};

export const loadMember = (emp) => {
    return (dispatch) => {
        dispatch({
            type: MEMBER_READ,
          });
    };
};

export const updateMember = (emp) => {
    return (dispatch) => {
       dispatch({
           type: MEMBER_UPDATE,
           payload: emp
       });
       navigateTo('Member');
    };
};

export const deleteMember = ( id ) => {
    return (dispatch) => {
        dispatch({
            type: MEMBER_DELETE,
            payload: id
        });
        navigateTo('Member');
    };
};
