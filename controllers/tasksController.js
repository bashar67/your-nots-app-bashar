const Task = require("../models/Task.js");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const checkPermissions = require("../utils/checkPermissions.js");

const createTask = async (req, res) => {
  const taskName = req.body;

  if (!taskName) {
    throw new BadRequestError("Please Add a task");
  }
  req.body.createdBy = req.user.userId;

  const task = await Task.create(req.body);
  res.status(StatusCodes.CREATED).json({ task });
};

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ tasks, totalTasks: tasks.length, numOfPages: 1 });
};

const deleteTask = async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    throw new NotFoundError(`No task with id ${taskId}`);
  }

  checkPermissions(req.user, task.createdBy);

  await task.deleteOne();
  res.status(StatusCodes.OK).json({ msg: "success! Task removed" });
};

const updateTask = async (req, res) => {
  const { id: taskId } = req.params;

  const { taskName } = req.body;

  if (!taskName) {
    throw new BadRequestError("Please add taskName");
  }

  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    throw new NotFoundError(`No task with id ${taskId}`);
  }

  // check permissions
  checkPermissions(req.user, task.createdBy);

  const updateTask = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updateTask });
};

const showStats = async (req, res) => {
  res.send("showStats");
};

module.exports = { createTask, getAllTasks, deleteTask, updateTask, showStats };
