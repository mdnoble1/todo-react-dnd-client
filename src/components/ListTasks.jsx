/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const ListTasks = ({tasks, setTasks }) => {


    const [ todoTasks, setTodoTasks ] = useState([]);
    const [ ongoingTasks, setOngoingTasks ] = useState([]);
    const [ completedTasks, setCompletedTasks ] = useState([]);

    useEffect( () => {

        const fTodo = tasks.filter(task => task.status === "todo");
        const fOngoing = tasks.filter(task => task.status === "ongoing");
        const fCompleted = tasks.filter(task => task.status === "completed");

        setTodoTasks(fTodo);
        setOngoingTasks(fOngoing);
        setCompletedTasks(fCompleted);


    }, [tasks])



    return (
        <div>
            <h2>List Tasks</h2> 
        </div>
    );
};

export default ListTasks;