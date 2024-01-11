/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import StatusList from "./StatusList";

const ListTasks = ({ tasks, setTasks }) => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fTodo = tasks.filter((task) => task.status === "todo");
    const fOngoing = tasks.filter((task) => task.status === "ongoing");
    const fCompleted = tasks.filter((task) => task.status === "completed");

    setTodoTasks(fTodo);
    setOngoingTasks(fOngoing);
    setCompletedTasks(fCompleted);
  }, [tasks]);

  const statuses = ["todo", "ongoing", "completed"];

  return (
    <div className="flex justify-center items-center gap-16">
      {statuses.map((status, index) => (
        <StatusList 
        key={index} 
        status={status}
        tasks={tasks}
        setTasks={setTasks}
        todoTasks={todoTasks}
        ongoingTasks={ongoingTasks}
        completedTasks={completedTasks}
        ></StatusList>
      ))}
    </div>
  );
};

export default ListTasks;
