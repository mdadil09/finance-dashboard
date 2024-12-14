"use client";

import React, { useContext, useState } from "react";
import styles from "./inbox.module.css";
import {
  ArrowDownLeftIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  InboxIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { DataContext } from "@/app/dashboard/layout";
import InboxMessages from "../InboxMessages/InboxMessages";
import InvoiceDetail from "../InvoiceDetail/InvoiceDetail";
import useWindowDimensions from "@/hooks/useDimension";

const InboxLayout = () => {
  const { isResponsive } = useContext(DataContext);
  const { width } = useWindowDimensions();
  const [messages, setMessages] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [archived, setArchived] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMessages = () => {
    setMessages(true);
    setCompleted(false);
    setArchived(false);
  };

  const handleCompleted = () => {
    setMessages(false);
    setCompleted(true);
    setArchived(false);
  };

  const handleArchived = () => {
    setMessages(false);
    setCompleted(false);
    setArchived(true);
  };

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <div
        className={styles.inb_container}
        style={{ width: !isResponsive ? "83vw" : "97vw", marginRight: "2%" }}
      >
        <div className={styles.inb_headers}>
          <div className={styles.h_left}>
            <InboxIcon
              style={{
                height: "1.5rem",
                width: "1.5rem",
                cursor: "pointer",
                color: "black",
                marginRight: "10px",
                backgroundColor: "lightgray",
                padding: "5px",
                borderRadius: "50%",
              }}
            />
            <h1>Inbox</h1>
          </div>
          <div className={styles.inputSec}>
            <input className type="text" placeholder="search..." />
            <button>
              <MagnifyingGlassIcon
                style={{
                  height: "0.75rem",
                  width: "0.75rem",
                  cursor: "pointer",
                }}
              />
            </button>
          </div>
        </div>
        <div className={styles.sub_header}>
          <div className={styles.actions_btns}>
            <button
              className={styles.action_btn}
              onClick={handleMessages}
              style={{
                backgroundColor: messages ? "#007bff" : "",
                color: messages ? "white" : "",
              }}
            >
              All Messages
            </button>
            <button
              className={styles.action_btn}
              onClick={handleCompleted}
              style={{
                backgroundColor: completed ? "#007bff" : "",
                color: completed ? "white" : "",
              }}
            >
              Completed
            </button>
            <button
              className={styles.action_btn}
              onClick={handleArchived}
              style={{
                backgroundColor: archived ? "#007bff" : "",
                color: archived ? "white" : "",
              }}
            >
              Archived
            </button>
          </div>
          <div className={styles.pagination}>
            <ArrowLeftIcon
              style={{
                height: "1rem",
                width: "1rem",
                cursor: "pointer",
                color: "gray",
                marginRight: width > 940 ? "10px" : "10px",
              }}
            />

            <div className={styles.icon_btn}>1 of 48</div>

            <ArrowRightIcon
              style={{
                height: "1rem",
                width: "1rem",
                cursor: "pointer",
                color: "gray",
                marginLeft: "10px",
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              flexBasis: isClicked ? "60%" : "99%",
              display: isClicked && width < 940 ? "none" : "block",
            }}
          >
            <InboxMessages handleClick={handleClick} />
          </div>
          {isClicked ? (
            <div style={{ flexBasis: width < 940 ? "95%" : "40%" }}>
              <InvoiceDetail handleClick={handleClick} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default InboxLayout;
