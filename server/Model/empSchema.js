const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    employeeDetails: [
      {
        jobTitle: { type: String, required: true },
        department: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: String, required: true },
        employmentStatus: { type: String, required: true },
      },
    ],
    address: [
      {
        homeAddress: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
      },
    ],
    upcomingEvents: [
      {
        eventTitle: { type: String, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        dateOfMeeting: { type: String, required: true },
        linkOfMeeting: { type: String, required: true },
      },
    ],
    leaveRequest: [
      {
        from: { type: String, require: true },
        to: { type: String, require: true },
        type: { type: String, required: true },
        reason: { type: String, required: true },
        status: { type: String, required: true },
      },
    ],
    upcomingHolidays: [
      {
        date: { type: String, required: true },
        name: { type: String, required: true },
        daysLeft: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
