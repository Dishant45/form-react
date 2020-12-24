const express = require("express");
const Task = require("../models/taskSchema");
const {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router();
router.route("/getalltask").post(createTask);
router.route("/getalltask").get(getAllTask);
router.route("/:_id").get(getTaskById);
router.route("/:_id").patch(updateTask);
router.route("/:_id").delete(deleteTask);

module.exports = router;
