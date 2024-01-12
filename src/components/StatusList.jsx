/* eslint-disable no-unused-vars */

import { useDrop } from "react-dnd";
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



    // react dnd dropping a card
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToCard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));


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


  const addItemToCard = (id) => {
    // console.log("dropping", id, status)

    setTasks((prev) => {
      // console.log("prev", prev);

      const mTasks = prev.map(t => {
        if(t.id === id){
          return {...t, status: status}
        }

        return t;
      })

      return mTasks;
    })
  }


  return (
    <section ref={drop} className={`rounded-md p-2 ${isOver ? "bg-slate-300" : ""}`}>
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
