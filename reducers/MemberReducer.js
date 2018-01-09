import {
    MEMBER_UPDATE,
    MEMBER_CREATE,
    MEMBER_DELETE,
    MEMBER_READ,
    MEMBER_LIST_UPDATE_SUCCESS,
    MEMBER_FETCH_SUCCESS,
    MEMBER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    allMembers: [
        //{'id': 1, 'name': 'Probal', 'phone': '123456', 'shift': 'Monday'}
    ]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case MEMBER_FETCH_SUCCESS:
            return action.payload;

        case MEMBER_UPDATE:
            return {
                ...state, 
                allMembers: state.allMembers.map(member => {
                    if (member.id === action.payload.id) {
                       return action.payload;
                    }
                    return member;
                }),
            };

        case MEMBER_CREATE:
            return {
                ...state,
                allMembers: [...state.allMembers, action.payload]
            }

        case MEMBER_DELETE:
            const objIndex = state.allMembers.findIndex(o => o.id === action.payload)
            return {
                ...state,
                allMembers: [
                    ...state.allMembers.slice(0, objIndex),
                    ...state.allMembers.slice(objIndex + 1)
                ]
            }

        case MEMBER_READ: 
            return action.payload;

        case MEMBER_LIST_UPDATE_SUCCESS: 
        
        case MEMBER_SAVE_SUCCESS:
            return INITIAL_STATE;
        
        default:
            return state;
    }
};
