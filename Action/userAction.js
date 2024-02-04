import * as actionType from '../actionType';
export function setAllUsers(users){
    return {
        type: actionType.SET_USER,
        payload: users
    }
}
export function setCurrectUsers(user){
    return {
        type: actionType.SET_CURRECT_USER,
        payload: user
    }
}