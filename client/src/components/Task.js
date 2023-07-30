import { FaX } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Task";
import { useAppContext } from "../context/appContext";

const Task = ({ _id, taskName }) => {
  const { setEditTask, deleteTask } = useAppContext();

  return (
    <Wrapper>
      <div className="task-box">
        <div className="sec-box">
          {" "}
          <label>
            <input
              type="checkbox"
              //   checked={isChecked}
              //   onChange={handleCheckboxChange}
              className="custom-checkbox"
            />
            <span className="checkmark"></span>
          </label>
          <p className="task-text">{taskName}</p>
        </div>

        <div className="icons">
          <FaX onClick={() => deleteTask(_id)} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Task;
// <FaRegEdit onClick={() => setEditTask(_id)} />;
