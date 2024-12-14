"use client";

import React from "react";
import styles from "./meetingModal.module.css";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ViewAllMeet = ({ viewModal, closeViewModal, employeeInfo }) => {
  const empMeetData = employeeInfo.map((item) => item.upcomingEvents);
  return (
    <>
      <Modal
        isOpen={viewModal}
        onRequestClose={closeViewModal}
        className={styles.modal_two}
        overlayClassName={styles.Overlay}
      >
        <div className={styles.container}>
          <div className={styles.modal_header}>
            <h3>Create Meeting</h3>
            <button onClick={closeViewModal}>
              <XMarkIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  cursor: "pointer",
                  color: "red",
                }}
              />
            </button>
          </div>
          <div className={styles.meet}>
            {empMeetData.flat(1).map((item, idx) => (
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
          </div>{" "}
        </div>
      </Modal>
    </>
  );
};

export default ViewAllMeet;
