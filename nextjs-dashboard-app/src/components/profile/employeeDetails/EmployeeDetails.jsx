"use client";

import React from "react";
import styles from "./employee.module.css";

const EmployeeDetails = ({ employeeInfo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Employment Details</h3>
        {employeeInfo.map((emp) =>
          emp.employeeDetails.map((item, idx) => (
            <div className={styles.content} key={idx}>
              <div className={styles.text}>
                <h4>Job Title</h4>
                <p>{item.jobTitle}</p>
              </div>
              <div className={styles.text}>
                <h4>Department</h4>
                <p>{item.department}</p>
              </div>
              <div className={styles.text}>
                <h4>Start Date</h4>
                <p>{item.startDate}</p>
              </div>
              <div className={styles.text}>
                <h4>End Date</h4>
                <p>{item.endDate}</p>
              </div>
              <div className={styles.text}>
                <h4>Employment Status</h4>
                <div className={styles.card_body_solid}>
                  <p>{item.employmentStatus}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
