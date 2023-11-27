import { ActionType } from "../../actions/user/ActionType";

const initialState ={
    users:[]
};

export const getUsersReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionType.GET_USERS:
            return {...state,users:payload}
            
        default:
            return state;
            
    }
};

export const getUserReducer = (state = {} ,{type,payload}) => {
    switch (type) {
        case ActionType.GET_USER_ID:
            return {...state,...payload}
            
        default:
            return state;
    }
}

export const deleteUserReducer = (state = {} , {type,payload}) => {
    switch (type){
        case ActionType.REMOVE_USER_ID:
            return {...state,userId:payload}

        default :
            return state
    }
}