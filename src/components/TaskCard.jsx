/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const TaskCard = ({task, 
    tasks, 
    setTasks}) => {
    return (
        <div>
            <h2>{task.name}</h2>
        </div>
    );
};

export default TaskCard;