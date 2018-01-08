import {
    MEMBER_UPDATE,
    MEMBER_CREATE,
    MEMBER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    id: '',
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case MEMBER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case MEMBER_CREATE:
        case MEMBER_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
