/* eslint-disable no-unused-vars */

import TaskCard from "./TaskCard";

/* eslint-disable react/prop-types */
const StatusList = ({
  status,
  tasks,
  setTasks,
  todoTasks,
  ongoingTasks,
  completedTasks,
}) => {
  let text = "to do";
  let bg = "bg-slate-500";
  let tasksToMap = todoTasks;

  if (status === "ongoing") {
    text = "On Going";
    bg = "bg-purple-500";
    tasksToMap = ongoingTasks;
  }

  if (status === "completed") {
    text = "Completed";
    bg = "bg-green-500";
    tasksToMap = completedTasks;
  }

  return (
    <section>
      <h2
        className={`font-bold text-xl uppercase ${bg} w-72 h-16 flex items-center justify-center rounded-md`}
      >
        {text}
        <span className="ml-4 bg-white rounded-full px-3 py-1 text-2xl font-bold">
          {tasksToMap.length}
        </span>
      </h2>
      <div>
        {tasksToMap.length > 0 &&
          tasksToMap.map((task) => <TaskCard 
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          ></TaskCard>)}
      </div>
    </section>
  );
};

export default StatusList;
