const express = require("express");
const {
  createEmployeeDetails,
  getEmployee,
  applyLeave,
  createMeetings,
} = require("../controllers/employee");
const protect = require("../middleware/auth");

const router = express.Router();

router.get("/employeeDetails", protect, createEmployeeDetails);
router.get("/employeeData", protect, getEmployee);
router.post("/applyLeave", protect, applyLeave);
router.post("/createMeeting", protect, createMeetings);

module.exports = router;
