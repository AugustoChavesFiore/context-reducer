import { useState,useContext } from 'react'
import { types } from '../Types/types'
import { TaskContext } from './context/task.context';

function App() {
  const {state, dispatch} = useContext(TaskContext)
  const [taskname, setTaskname]= useState('')
  const handleDone = (id) => {
    dispatch({
      type: types.taskDONE,
      payload: id
    })
  }

  return (
    <>
     <div className="row">
      <div className="col">
        <h1>TaskReducer</h1>
      </div>
     </div>
     <div className="row">
      <div className="col-4">
          <label htmlFor="task">Task</label>
          <input className='form-control'
           type="text" 
           id="task" 
           value={taskname}
           onChange={({target})=>
           {
           setTaskname(target.value)
           }}
           onKeyUpCapture={(e)=>{
             e.code === 'Enter' && dispatch({
               type: 'ADD',
               payload: {
                 id: new Date().getTime(),
                 title:taskname,
                 done: false
               }
             })
           }}
           />
      </div>
      <div className="col-8">
        <h3>Tasks</h3>
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <ul className="list-unstyled">
            {/* TodoItems  */}
            {
              (state.length === 0)
                ?
                (
                  <li className="alert alert-info text-center">No hay tareas</li>
                )
                :
                (
                  state.map((item) => (
                    <li key={item.id} className={`d-flex justify-content-between alert ${item.done ? 'alert-success' : 'alert-warning'}`}>
                      <span>{item.title}</span>
                      <button
                        className="btn btn-sm"
                        onClick={() => handleDone(item.id)}
                      >
                        {
                          (item.done)
                            ?
                            ("Completada ")
                            :
                            ("Completar")
                        }

                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => dispatch({
                          type: types.taskDELETE,
                          payload: item.id
                        })}
                        >Eliminar</button>
                    </li>

                  ))
                )
            }
          </ul>

        </div>

      </div>
     </div>

    </>
  )
}

export default App
