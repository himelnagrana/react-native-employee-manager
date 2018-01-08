import {
    MEMBER_UPDATE,
    MEMBER_CREATE,
    MEMBER_FETCH_SUCCESS,
    MEMBER_SAVE_SUCCESS
} from './types';


export const createMember = (emp) => {
    const {name, phone, shift} = emp;
    return (dispatch) => {
        dispatch({ type: MEMBER_CREATE });
    };
};

export const loadMember = () => {
    return (dispatch) => {
        
    };
};

export const updateMember = ({ name, phone, shift, uid }) => {
    return (dispatch) => {
       
    };
};

export const deleteMember = ({ uid }) => {
    return () => {
        
    };
};
