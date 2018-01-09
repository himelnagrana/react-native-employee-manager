import {
    MEMBER_UPDATE,
    MEMBER_CREATE,
    MEMBER_DELETE
} from '../actions/types';

const INITIAL_STATE = {
    allMembers: [
        //{'id': 1, 'name': 'Probal', 'phone': '123456', 'shift': 'Monday'}
    ]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

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
        
        default:
            return state;
    }
};
