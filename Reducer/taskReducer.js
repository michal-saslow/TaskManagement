import * as actionType from '../actionType';
const initialState = {
    allTask: []
}
export function taskReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.SET_TASK:
            return {
                ...state,
                allTask: action.payload
            }
        case actionType.DELETE_TASK:
            let index = state.allTask.findIndex(s => s.id == action.payload)
            let copy = [...state.allTask]
            copy.splice(index, 1)
            return {
                ...state,//מעתיק את כל הסטייט כמות שהוא
                allTask: copy
            }
        case actionType.CHANGE_TASK:
            debugger;
            let index2 = state.allTask.findIndex(s => s.id == action.payload)
            let copy2 = [...state.allTask]
            copy2[index2].completed = true
            return {
                ...state,
                allTask: copy2
            }
    }
    return state
}