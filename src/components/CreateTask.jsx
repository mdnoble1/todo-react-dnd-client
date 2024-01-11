import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ( { tasks, setTasks } ) => {


    // assigning task from the input field 
    const [ task, setTask ] = useState({
        id: "",
        name: "",
        status: "todo"  // can also be ongoing and completed 
    });

    // console.log(task);

    const handleAddTask = (e) => {
        e.preventDefault();

        setTasks( ( previous => {
            // setting the task in setTasks array 
            const list = [ ...previous, task ];

            // storing the tasks in local storage 
            localStorage.setItem( "tasks", JSON.stringify(list) );

            return list;
        }))
    }


    return (
        <div>
           <form onSubmit={handleAddTask}>
            <input type="text" name="taskName" className="border-2 border-slate-400 bg-slate-100 rounded-md h-12 w-72 mr-4 p-4"
            value={task.name}
            onChange={ (e) => setTask( {...task, id: uuidv4(), name: e.target.value }) }/>
            <button className="bg-sky-400 px-4 py-2 rounded-md font-bold text-lg uppercase text-white">Create</button>
           </form>
        </div>
    );
};

export default CreateTask;