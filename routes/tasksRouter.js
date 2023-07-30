const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
  showStats,
} = require("../controllers/tasksController");

const authenticateUser = require("../middleware/auth");

router.route("/").post(createTask).get(getAllTasks);
// place before :id
router.route("/stats").get(authenticateUser, showStats);
router.route("/:id").delete(deleteTask).patch(updateTask);

module.exports = router;
