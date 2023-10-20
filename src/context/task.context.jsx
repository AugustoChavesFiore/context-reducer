import { createContext,useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

export const TaskContext = createContext();
const init =()  => {
    return JSON.parse(localStorage.getItem('tasks')) || []
  }

export const TaskProvider = ({ children }) => {
      const [state, dispatch] = useReducer(taskReducer, [],init)
    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    );
}