import {ActionType} from './ActionType'


export const getAllUsers = (users) =>{
    return {
        type: ActionType.GET_USERS,
        payload: users
    }
}

export const getUser = (userId) =>{
    return {
        type: ActionType.GET_USER_ID,
        payload: userId
    }
}

export const deleteUser = (userId) => {
    return {
        type: ActionType.REMOVE_USER_ID,
        payload: userId
    }
}