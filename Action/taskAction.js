import * as actionType from '../actionType';
export function setAlltasks(tasks){
    return {
        type: actionType.SET_TASK,
        payload: tasks
    }
}
export function deleteTask(id){
    return{
        type:actionType.DELETE_TASK,
        payload:id
    }
}
export function changeTask(id){
    return{
        type:actionType.CHANGE_TASK,
        payload:id
    }
}