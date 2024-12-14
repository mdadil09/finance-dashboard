"use client";

import React from "react";
import styles from "./week.module.css";

const Vacation = ({ employeeInfo }) => {
  return (
    <div className={styles.vacation_container}>
      <h3>Upcoming Holidays</h3>
      {employeeInfo.map((emp) =>
        emp.upcomingHolidays.map((item, idx) => (
          <>
            <div className={styles.vCard} key={idx}>
              <div className={styles.text_one}>{item.date}</div>
              <div className={styles.text_two}>{item.name}</div>
              <div className={styles.text_three}>{item.daysLeft} days left</div>
            </div>
            <hr style={{ border: "1px solid lightgrey" }} />
          </>
        ))
      )}
    </div>
  );
};

export default Vacation;
