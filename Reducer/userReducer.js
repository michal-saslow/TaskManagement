import * as actionType from "../actionType";
const initialState={
    currentUser:{ 
        userName: "",
        password: ""
    },
    allUser:[]
}
export function userReducer(state = initialState, action){
switch(action.type){
    case actionType.SET_USER:
        return{
            ...state,
            allUser: action.payload
        }
    case actionType.SET_CURRECT_USER:
        return{
            currentUser:action.payload,
            allUser:state.allUser
        }
}
return state
}
