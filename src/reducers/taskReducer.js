import { types } from "../../Types/types"

export const taskReducer =(state, action)=>{
    switch(action.type){
        case types.taskADD:
            return [...state, action.payload]
        case types.taskDELETE:
            return state.filter((task)=>task.id !== action.payload) 
        case types.taskDONE:
            return state.map((task)=>{
                if(task.id === action.payload){
                    return {...task, done: !task.done}
                }
                return task
            })
        default:
            return state;
    }
}