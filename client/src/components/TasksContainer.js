import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Task from "./Task";
import Wrapper from "../assets/wrappers/TaskContainerWrapper";

const TasksContainer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { getTasks, tasks, isLoading, page, totalTasks } = useAppContext();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    getTasks();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (tasks.length === 0) {
    return (
      <Wrapper>
        <h2 className="middle">No tasks to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        {tasks.map((task) => {
          return <Task key={task._id} {...task} />;
        })}
      </div>
    </Wrapper>
  );
};

export default TasksContainer;
