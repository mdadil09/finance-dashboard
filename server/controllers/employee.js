const Employee = require("../Model/empSchema");
const User = require("../Model/userSchema");

const createEmployeeDetails = async (req, res) => {
  try {
    const result = await Employee.create({
      user: req.user.id,
      employeeDetails: [
        {
          jobTitle: "Credit Analyst",
          department: "Finance",
          startDate: "2021-01-15",
          endDate: "--",
          employmentStatus: "Active",
        },
      ],
      address: [
        {
          homeAddress: "111 Park avenue",
          city: "San Francisco",
          state: "California",
          postalCode: "12345",
          country: "USA",
        },
      ],
      upcomingEvents: [
        {
          eventTitle: "Project Deadline",
          month: "June",
          year: "2024",
          startTime: "09:00 AM",
          endTime: "10:00 AM",
          dateOfMeeting: "06-06-2024",
          linkOfMeeting: "",
        },
        {
          eventTitle: "Team Meeting",
          month: "June",
          year: "2024",
          startTime: "15:00 PM",
          endTime: "16:00 PM",
          dateOfMeeting: "07-06-2024",
          linkOfMeeting: "",
        },
        {
          eventTitle: "Scrum Meeting",
          month: "June",
          year: "2024",
          startTime: "18:00 PM",
          endTime: "19:00 PM",
          dateOfMeeting: "10-06-2024",
          linkOfMeeting: "",
        },
      ],
      leaveRequest: [
        {
          from: "01-07-2024",
          to: "17-07-2024",
          type: "Vacation Leave",
          reason: "Family Trip",
          status: "Approved",
        },
        {
          from: "01-06-2024",
          to: "17-06-2024",
          type: "Sick Leave",
          reason: "Medical",
          status: "Pending",
        },
        {
          from: "27-05-2024",
          to: "27-05-2024",
          type: "Casual Leave",
          reason: "On 27 May 2024 there is my friend birthday party.",
          status: "Rejected",
        },
      ],
      upcomingHolidays: [
        {
          date: "25 May",
          name: "Voting Day",
          daysLeft: 1,
        },
        {
          date: "16 June",
          name: "Id-Ul-Adha",
          daysLeft: 23,
        },
        {
          date: "15 Aug",
          name: "Independence day",
          daysLeft: 52,
        },
        {
          date: "14 APR",
          name: "Bengali New Year",
          daysLeft: 79,
        },
      ],
    });

    res.status(201).send(result);
  } catch (error) {
    console.log(error);
  }
};

const getEmployee = async (req, res) => {
  try {
    const userId = req.user.id;

    const personalInfo = await User.find({
      _id: userId,
    });

    const employeeInfo = await Employee.find({
      user: userId,
    });

    res.status(200).send({
      personalInfo,
      employeeInfo,
    });
  } catch (error) {
    console.log(error);
  }
};

const applyLeave = async (req, res) => {
  try {
    const { from, to, type, reason } = req.body;
    const userId = req.user.id;

    const result = await Employee.updateOne(
      { user: userId },
      {
        $push: {
          leaveRequest: {
            $each: [
              {
                from: from,
                to: to,
                type: type,
                reason: reason,
                status: "Pending",
              },
            ],
            $position: 0,
          },
        },
      }
    );

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

const createMeetings = async (req, res) => {
  try {
    const { meetTitle, meetStartTime, meetEndTime, dateOfMeet, meetLink } =
      req.body;
    const userId = req.user.id;

    const result = await Employee.updateOne(
      { user: userId },
      {
        $push: {
          upcomingEvents: {
            $each: [
              {
                eventTitle: meetTitle,
                month: "June",
                year: "2024",
                startTime: meetStartTime,
                endTime: meetEndTime,
                dateOfMeeting: dateOfMeet,
                linkOfMeeting: meetLink,
              },
            ],
            $position: 0,
          },
        },
      }
    );

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createEmployeeDetails,
  getEmployee,
  applyLeave,
  createMeetings,
};
