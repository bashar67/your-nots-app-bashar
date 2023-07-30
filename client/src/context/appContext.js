import axios from "axios";
import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  PASSWORD_NOT_MATCHING,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CREATE_TASK_BEGIN,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
  CLEAR_VALUES,
  GET_TASKS_BEGIN,
  GET_TASKS_SUCCESS,
  SET_EDIT_TASK,
  DELETE_TASK_BEGIN,
  EDIT_TASK_BEGIN,
  EDIT_TASK_ERROR,
  EDIT_TASK_SUCCESS,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  isEditing: false,
  isCompleted: "false",
  editTaskId: "",
  taskName: "",
  tasks: [],
  totalTasks: 0,
  numOfPages: 1,
  page: 1,
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
    headers: { Authorization: `Bearer ${state.token}` },
  });

  //* request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //* response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log("AUTH ERROR");
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({
      type: DISPLAY_ALERT,
    });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  const passwordAlertMatch = () => {
    dispatch({
      type: PASSWORD_NOT_MATCHING,
    });
    clearAlert();
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);
      const { user, token } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          token,
        },
      });

      addUserToLocalStorage({
        user,
        token,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = data;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });

      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);

      // no token
      const { user } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });

      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name, value },
    });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createTask = async () => {
    dispatch({ type: CREATE_TASK_BEGIN });
    try {
      const { taskName } = state;

      await authFetch.post("/tasks", { taskName });
      dispatch({
        type: CREATE_TASK_SUCCESS,
      });
      getTasks();
      clearValues();
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_TASK_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getTasks = async () => {
    let url = `/tasks`;

    dispatch({ type: GET_TASKS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { tasks, totalTasks, numOfPages } = data;
      dispatch({
        type: GET_TASKS_SUCCESS,
        payload: {
          tasks,
          totalTasks,
          numOfPages,
        },
      });
    } catch (error) {
      console.log(error.response);
      logoutUser();
    }
    clearAlert();
  };

  const setEditTask = (id) => {
    dispatch({ type: SET_EDIT_TASK, payload: { id } });
  };
  const editTask = async () => {
    dispatch({ type: EDIT_TASK_BEGIN });
    try {
      const { taskName } = state;

      await authFetch.patch(`/tasks/${state.editTaskId}`, {
        taskName,
      });
      dispatch({
        type: EDIT_TASK_SUCCESS,
      });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_TASK_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteTask = async (taskId) => {
    dispatch({ type: DELETE_TASK_BEGIN });
    try {
      await authFetch.delete(`/tasks/${taskId}`);
      getTasks();
    } catch (error) {
      // logoutUser();
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        passwordAlertMatch,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
        handleChange,
        createTask,
        getTasks,
        editTask,
        deleteTask,
        setEditTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
