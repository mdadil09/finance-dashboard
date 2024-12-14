"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Modal from "react-modal";
import styles from "./leave.module.css";
import {
  ClockIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";

// const customStyles = {
//   content: {
//     width: "50%",
//     height: "60vh",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     borderRadius: "12px",
//     background: "var(--card-bg)",
//     boxShadow:
//       "0 20px 25px -5px rgba(0, 0, 0, 0.1) 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//     // overflow: "hidden",
//     zIndex: "1000",
//   },
// };

const ViewAllLeave = ({ viewModal, closeViewModal, employeeInfo }) => {
  return (
    <>
      <Modal
        isOpen={viewModal}
        onRequestClose={closeViewModal}
        className={styles.modal}
        overlayClassName={styles.Overlay}
      >
        <div className={styles.container}>
          <div className={styles.modal_header}>
            <h3>All leave applied by you</h3>
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
          <div className={styles.body_card}>
            {employeeInfo.map((emp) =>
              emp.leaveRequest.map((item, idx) => (
                <div className={styles.content} key={idx}>
                  <div>
                    <div className={styles.content_head}>
                      <p
                        style={{
                          color:
                            item.status === "Approved"
                              ? "#17B169"
                              : item.status === "Pending"
                              ? "orange"
                              : "#CC0000",
                          fontSize: "16px",
                          fontWeight: "500",
                          margin: "0",
                        }}
                      >
                        {item.type}
                      </p>
                      <div
                        className={styles.status_solid}
                        style={{
                          backgroundColor:
                            item.status === "Approved"
                              ? "#17B169"
                              : item.status === "Pending"
                              ? "orange"
                              : "#CC0000",
                        }}
                      >
                        {item.status}
                      </div>
                    </div>

                    <p>{item.reason}</p>
                  </div>
                  <div>
                    {item.status === "Approved" ? (
                      <HandThumbUpIcon
                        style={{
                          height: "1.5rem",
                          width: "1.5rem",
                          color: "#17B169",
                        }}
                      />
                    ) : item.status === "Pending" ? (
                      <ClockIcon
                        style={{
                          height: "1.5rem",
                          width: "1.5rem",
                          color: "orange",
                        }}
                      />
                    ) : (
                      <HandThumbDownIcon
                        style={{
                          height: "1.5rem",
                          width: "1.5rem",
                          color: "#CC0000",
                        }}
                      />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewAllLeave;
