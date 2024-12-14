import React from "react";
import styles from "./emailSuccess.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

const EmailSuccess = ({ email }) => {
  const openEmailApp = () => {
    // Mailto link to open email client
    window.location.href = "mailto:";
  };
  return (
    <div className={styles.container}>
      <div className={styles.card_email}>
        <div className={styles.card_top}>
          <FontAwesomeIcon icon={faEnvelope} shake size="3x" color="#03c03c" />
        </div>
        <div className={styles.card_middle}>
          <div className={styles.text}>We sent a password reset link to</div>
          <div className={styles.text_email}>{email}</div>
          <div className={styles.btn}>
            <button onClick={openEmailApp}>Open email app</button>
          </div>
        </div>
        <div className={styles.card_bottom}>
          <div className={styles.text_resend}>
            Did not receive the email? <button>Click to resend</button>
          </div>
          <div className={styles.backTO}>
            <ArrowLongLeftIcon
              style={{
                height: "1rem",
                width: "1rem",
                cursor: "pointer",
                marginRight: "10px",
              }}
            />{" "}
            <Link href="/">Back to login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSuccess;
