import React, { useEffect, useState } from "react";
import styles from "./auth.module.css";
import Link from "next/link";
import Logo from "../misc/Logo/Logo";

const ResetPasswordLayout = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmpassword,
  resetPassword,
  message,
}) => {
  return (
    <div className={styles.auth_container_login}>
      <div className={styles.auth}>
        <div className={styles.auth_headers}>
          <div className={styles.upper_part}>
            <div className={styles.upper_part_text}></div>{" "}
            <div>
              <Logo />
            </div>
          </div>
          <div className={styles.lower_part}>Set New Password</div>
          <div
            className={styles.lower_part}
            style={{ fontSize: "12px", marginTop: "5px" }}
          >
            Your new password must be different from previously used password.
          </div>
        </div>
        <div className={styles.auth_form}>
          <div className={styles.input_group}>
            <div className={styles.input}>
              <div>
                <label htmlFor="">Password</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">Confirm Password</label>
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                  />
                </div>
                {password != confirmPassword && confirmPassword != "" ? (
                  <div className={styles.warning}>
                    Password and Confirm password did not match
                  </div>
                ) : confirmPassword != "" ? (
                  <div className={styles.success}>{message}</div>
                ) : null}
              </div>
            </div>

            <div className={styles.btn}>
              <button onClick={resetPassword}>Reset Password</button>
            </div>
          </div>
          <div className={styles.bottom_part}>
            <Link href="/">Back to login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordLayout;
