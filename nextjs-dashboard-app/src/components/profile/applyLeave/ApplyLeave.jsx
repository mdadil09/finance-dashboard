"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./applyLeave.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bounce, toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import { useTheme } from "next-themes";

const customStyles = {
  content: {
    width: "25%",
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    background: "var(--card-bg)",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1) 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    overflow: "hidden",
    zIndex: "1000",
  },
};

const ApplyLeave = ({ modal, closeModal, handleApplyLeave }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState("");
  const [reason, setReason] = useState("");
  const token = useSelector((state) => state.auth.token);
  const { theme } = useTheme();

  const applyLeave = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      if (from == "" || to == "" || type == "" || reason == "") {
        toast.warning("Please fill all fields!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme:
            theme === "light" ? "light" : theme === "dark" ? "dark" : "dark",
          transition: Bounce,
        });
      }

      if (from != "" && to != "" && type != "" && reason != "") {
        const result = await axios.post(
          "http://localhost:5000/api/employee/applyLeave",
          { from, to, type, reason },
          config
        );

        toast.success("Leave Applied Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme:
            theme === "light" ? "light" : theme === "dark" ? "dark" : "dark",
          transition: Bounce,
        });
        handleApplyLeave();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.Overlay}
      >
        <div className={styles.container}>
          <div className={styles.modal_header}>
            <h3>Apply Leave</h3>
            <button onClick={closeModal}>
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
          <div className={styles.modal_body}>
            <div className={styles.input_group}>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">From</label>
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="dd/mm/yy"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">To</label>
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="dd/mm/yy"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">Type of Leave</label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">Reason</label>
                </div>
                <div>
                  <textarea
                    type="textarea"
                    placeholder="Write your reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.btn}>
              <div></div>
              <button onClick={applyLeave}>Apply Leave</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ApplyLeave;
