import { useState } from "react";

const CreateTask = ( { tasks, setTasks } ) => {


    // assigning task from the input field 
    const [ task, setTask ] = useState({
        id: "",
        name: "",
        status: "todo"  // can also be ongoing and completed 
    })


    return (
        <div>
           <form>
            <input type="text" name="taskName" className="border-2 border-slate-400 bg-slate-100 rounded-md h-12 w-72 mr-4 p-4"
            onChange={ (e) => setTask( {...task, id: }) }/>
            <button className="bg-sky-400 px-4 py-2 rounded-md font-bold text-lg uppercase">Create</button>
           </form>
        </div>
    );
};

export default CreateTask;