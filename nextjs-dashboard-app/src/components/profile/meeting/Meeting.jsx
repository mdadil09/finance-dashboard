"use client";

import React from "react";
import styles from "./meeting.module.css";
import Link from "next/link";
import { useState } from "react";
import CreateMeetingModal from "./Modal/CreateMeetingModal";
import ViewAllMeet from "./Modal/ViewAllMeet";

const Meeting = ({ employeeInfo }) => {
  const [modal, setModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const employeeInfoSliced = employeeInfo.map((item) =>
    item.upcomingEvents.map((itm) => itm).slice(0, 3)
  );

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const openViewModal = () => {
    setViewModal(true);
  };

  const closeViewModal = () => {
    setViewModal(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.heading}>
          <div className={styles.left}>
            <h3>Upcoming Meetings</h3>
            <p>June,2024</p>
          </div>
          <div className={styles.right}>
            <button className={styles.btn} onClick={openModal}>
              Create Meeting
            </button>
            <button onClick={openViewModal}>View All</button>
          </div>
        </div>

        <div className={styles.meet}>
          {employeeInfoSliced.flat(1).map((item, idx) => (
            <div className={styles.content} key={idx}>
              <div className={styles.meet_left}>
                <h3>{item.eventTitle}</h3>
                <p>
                  {item.startTime} - {item.endTime}
                </p>
              </div>
              <div className={item.meet_right}>
                <Link href="">Join</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CreateMeetingModal
        modal={modal}
        closeModal={closeModal}
        setModal={setModal}
      />
      <ViewAllMeet
        viewModal={viewModal}
        closeViewModal={closeViewModal}
        employeeInfo={employeeInfo}
      />
    </div>
  );
};

export default Meeting;
