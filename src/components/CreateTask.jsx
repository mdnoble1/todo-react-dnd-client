/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  // assigning task from the input field
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo", // can also be ongoing and completed
  });

  // console.log(task);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (task.name.length < 3) {
      return toast.error("A Task Should Be 3 Characters Long");
    }
    if (task.name.length > 100) {
      return toast.error("A Task Should Not Be Too Long");
    }

    // setTasks(() => {
    //   // setting the task in setTasks array
    //   const list = [...task, task];

    //   // storing the tasks in local storage
    //   localStorage.setItem("tasks", JSON.stringify(list));

    //   return list;
    // });


    // const updatedTasks = [...tasks, task ];

    // const updatedTasks = Array.isArray(tasks) ? [...tasks, task] : [{ task }];

    // Check if tasks is an array before spreading
    const updatedTasks = tasks ? [...tasks, task] : [{ task }];

    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    toast.success("Task Created Successfully");

    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          name="taskName"
          className="border-2 border-slate-400 bg-slate-100 rounded-md h-12 w-72 mr-4 p-4"
          value={task.name}
          onChange={(e) =>
            setTask({ ...task, id: uuidv4(), name: e.target.value })
          }
        />
        <button className="bg-sky-400 px-4 py-2 rounded-md font-bold text-lg uppercase text-white">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
