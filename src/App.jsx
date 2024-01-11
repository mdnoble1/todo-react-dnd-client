import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import { Toaster } from "react-hot-toast";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  const [tasks, setTasks] = useState([]);

  // console.log("Task In App", tasks);

  useEffect(() => {
    // getting tasks from the local storage
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <section className="max-w-screen-2xl mx-auto bg-slate-200 w-full h-screen flex flex-col gap-10 items-center py-20">
        <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
        <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
        <Toaster></Toaster>
      </section>
    </DndProvider>
  );
}

export default App;
