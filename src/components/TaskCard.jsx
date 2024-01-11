/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { CiCircleRemove } from "react-icons/ci";

const TaskCard = ({ task, tasks, setTasks }) => {


    const handleRemoveTask = (id) => {
        // console.log(id)

        const ftasks = tasks.filter(t => t.id !== id);

        localStorage.setItem("tasks", JSON.stringify(ftasks));
        setTasks(ftasks);

        toast("Task Removed Successfully", {icon: "💀"});
    }



  return (
    <section className="my-2">
      <div className="flex items-center justify-between cursor-grab rounded-md drop-shadow-2xl bg-slate-100 px-4 py-3">
        <h2 className="font-bold text-xl text-black capitalize">{task.name}</h2>
        <button onClick={() => handleRemoveTask(task.id)} className="font-bold text-3xl text-red-600">
          <CiCircleRemove></CiCircleRemove>
        </button>
      </div>
    </section>
  );
};

export default TaskCard;
