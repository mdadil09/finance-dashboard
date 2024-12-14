"use client";

import React, { useState } from "react";
import styles from "./meetingModal.module.css";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { useTheme } from "next-themes";

const CreateMeetingModal = ({ modal, closeModal, setModal }) => {
  const [meetTitle, setMeetTitle] = useState("");
  const [dateOfMeet, setDateOfMeet] = useState("");
  const [meetStartTime, setMeetStartTime] = useState("");
  const [meetEndTime, setMeetEndTime] = useState("");
  const [meetLink, setMeetLink] = useState("");
  const token = useSelector((state) => state.auth.token);
  const { theme } = useTheme();

  const handleCreateMeet = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      if (
        meetTitle === "" ||
        dateOfMeet === "" ||
        meetStartTime === "" ||
        meetEndTime === "" ||
        meetLink === ""
      ) {
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

      if (
        meetTitle != "" &&
        dateOfMeet != "" &&
        meetStartTime != "" &&
        meetEndTime != "" &&
        meetLink != ""
      ) {
        const result = await axios.post(
          "http://localhost:5000/api/employee/createMeeting",
          { meetTitle, dateOfMeet, meetStartTime, meetEndTime, meetLink },
          config
        );
        toast.success("Meeting Created Successfully!", {
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

        setModal(close);
      }
    } catch (error) {
      toast.error("Something Went Wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme === "light" ? "light" : theme === "dark" ? "dark" : "dark",
        transition: Bounce,
      });

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
            <h3>Create Meeting</h3>
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
                  <label htmlFor="">Meeting Title</label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter meeting title"
                    value={meetTitle}
                    onChange={(e) => setMeetTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">Date Of Meeting</label>
                </div>
                <div>
                  <input
                    type="date"
                    placeholder=""
                    value={dateOfMeet}
                    onChange={(e) => setDateOfMeet(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">Sechdule Meeting Time</label>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="time"
                    placeholder=""
                    style={{ marginRight: "10px" }}
                    value={meetStartTime}
                    onChange={(e) => setMeetStartTime(e.target.value)}
                  />
                  <input
                    type="time"
                    placeholder=""
                    value={meetEndTime}
                    onChange={(e) => setMeetEndTime(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">Meeting Link</label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter the meeting link"
                    value={meetLink}
                    onChange={(e) => setMeetLink(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.btn}>
              <div></div>
              <button onClick={handleCreateMeet}>Create Meeting</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateMeetingModal;
