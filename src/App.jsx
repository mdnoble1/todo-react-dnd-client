import { useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <section className="max-w-screen-2xl mx-auto bg-slate-200 w-full h-screen flex flex-col gap-10 items-center py-16">
      <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
      <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
    </section>
  );
}

export default App;
