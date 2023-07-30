import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/AddTask";
import { FaPlus } from "react-icons/fa";

const AddTask = (props) => {
  const {
    showAlert,
    displayAlert,
    taskName,
    handleChange,
    createTask,
    editTask,
    isEditing,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editTask();
      return;
    }
    createTask();
  };

  const handleTaskInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      {showAlert && <Alert />}

      {props.userPage ? (
        <div className="user-info-text">
          {" "}
          <p>Modify user information </p>
        </div>
      ) : (
        <div>
          <label htmlFor="taskName"></label>
          <input
            type="text"
            name="taskName"
            className="task-input"
            placeholder="Crate a new Todo...."
            onChange={handleTaskInput}
            value={taskName}
          />
          <FaPlus className="add-button" onClick={handleSubmit} />
        </div>
      )}
    </Wrapper>
  );
};

export default AddTask;
// <FormRow
//   type="text"
//   name="taskName"
//   value={taskName}
//   className="task-input"
//   handleChange={handleTaskInput}
// />
