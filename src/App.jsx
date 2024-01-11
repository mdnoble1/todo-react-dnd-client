import { useState } from "react"
import CreateTask from "./components/CreateTask";

function App() {

  const [ tasks, setTasks ] = useState([]);

  return (
    <section>
      <h2 className="text-6xl">React DND TODO App</h2>
      <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
    </section>
  )
}

export default App
