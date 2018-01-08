import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    //console.log(name, phone, shift);
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        
    };
};

export const employeesFetch = () => {

    return (dispatch) => {
        
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {

    return (dispatch) => {
       
    };
};

export const employeeDelete = ({ uid }) => {

    return () => {
        
    };
};
