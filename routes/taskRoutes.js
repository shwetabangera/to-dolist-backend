const express = require("express");

const router = express.Router();
const Task = require("../models/taskSchema.js");
const {
	createTask,
	getAllTasks,
	getbyTaskId,
	updateTask,
	deleteTask,
} = require("../controllers/taskController.js");

router.route("/task").post(createTask);
router.route("/getAllTasks").get(getAllTasks);

router.route("/:taskId").get(getbyTaskId);
router.route("/updateTask").patch(updateTask);
router.route("/deleteTask").patch(deleteTask);

module.exports = router;
