import {
    MEMBER_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    allMembers: [
        {'id': 1, 'name': 'Probal', 'phone': '123456', 'shift': 'Monday'}
    ]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MEMBER_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
