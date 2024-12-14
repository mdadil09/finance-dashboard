"use client";

import React, { useEffect, useState } from "react";
import styles from "./leave.module.css";
import Image from "next/image";
import {
  ClockIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import ApplyLeave from "../applyLeave/ApplyLeave";
import Modal from "react-modal";
import ViewAllLeave from "./ViewAllLeave";
Modal.setAppElement("body");

const Leave = ({ employeeInfo }) => {
  const [modal, setModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const employeeInfoSliced = employeeInfo.map((item) =>
    item.leaveRequest.map((itm) => itm).slice(0, 3)
  );

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const handleApplyLeave = () => {
    setModal(false);
  };

  const openViewModal = () => {
    setViewModal(true);
  };

  const closeViewModal = () => {
    setViewModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header_section}>
        <h3>Things to be taken care of</h3>
        <button onClick={openViewModal}>View All</button>
      </div>

      <div className={styles.head_card}>
        <div>
          <h3>Were you on leave yesterday(22 May 2024)?</h3>
          <button onClick={openModal}>Apply Leave</button>
        </div>
        <div>
          <Image src="/summer-holidays.png" height={64} width={64} alt="" />
        </div>
      </div>
      <div className={styles.body_card}>
        {employeeInfoSliced.flat(1).map((item, idx) => (
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
        ))}
        <ApplyLeave
          modal={modal}
          closeModal={closeModal}
          handleApplyLeave={handleApplyLeave}
        />
        <ViewAllLeave
          viewModal={viewModal}
          closeViewModal={closeViewModal}
          employeeInfo={employeeInfo}
        />
      </div>
    </div>
  );
};

export default Leave;
