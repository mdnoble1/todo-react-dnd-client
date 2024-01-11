import { useState } from "react"
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";

function App() {

  const [ tasks, setTasks ] = useState([]);

  return (
    <section>
      <h2 className="text-6xl">React DND TODO App</h2>
      <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
      <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
    </section>
  )
}

export default App
