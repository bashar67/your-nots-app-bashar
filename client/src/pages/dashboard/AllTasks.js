import Wrapper from "../../assets/wrappers/AllTasks";
import TasksContainer from "../../components/TasksContainer";
import { useAppContext } from "../../context/appContext";
const AllTasks = ({ isToggleLang }) => {
  const { totalTasks, tasks } = useAppContext();

  return (
    <Wrapper>
      <TasksContainer />

      <div className="btns-box">
        <div className="count">
          {totalTasks} item{tasks.length > 1 && "s"} left
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              console.log("ALL");
            }}
          >
            ALL
          </button>
          <button
            type="button"
            onClick={() => {
              console.log("Active");
            }}
          >
            {isToggleLang ? "لم ينجز" : "Active"}
          </button>
          <button
            type="button"
            onClick={() => {
              console.log("Completed");
            }}
          >
            {isToggleLang ? "مكتمل" : "Completed"}
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            console.log("Clear Completed");
          }}
        >
          {isToggleLang ? "حذف المكتملة" : "Clear Completed"}
        </button>
      </div>
    </Wrapper>
  );
};

export default AllTasks;
