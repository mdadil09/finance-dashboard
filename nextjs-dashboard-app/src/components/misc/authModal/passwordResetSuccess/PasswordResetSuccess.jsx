import React from "react";
import styles from "./passwordResetSuccess.module.css";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const PasswordResetSuccess = ({ handleLogin }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card_email}>
        <div className={styles.card_top}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            beat
            size="3x"
            color="#03c03c"
          />{" "}
        </div>
        <div className={styles.card_middle}>
          <div className={styles.bigText}>Password reset</div>
          <div className={styles.text}>
            Your password has been successfully reset.
          </div>
          <div className={styles.text_email}>
            Click below to login magically.
          </div>
          <div className={styles.btn}>
            <button onClick={handleLogin}>Continue</button>
          </div>
        </div>
        <div className={styles.card_bottom}>
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

export default PasswordResetSuccess;
