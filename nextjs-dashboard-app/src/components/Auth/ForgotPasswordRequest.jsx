"use client";
import React from "react";
import styles from "./auth.module.css";
import Link from "next/link";
import Logo from "../misc/Logo/Logo";
import { toast } from "react-toastify";

const ForgotPasswordRequest = ({ email, setEmail, verifyEmail }) => {
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
          <div className={styles.lower_part}>Find Your Account</div>
        </div>
        <div className={styles.auth_form}>
          <div className={styles.input_group}>
            <div className={styles.input}>
              <div>
                <label htmlFor="">
                  Please enter your email address or mobile number to search for
                  your account.
                </label>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.btn}>
              <button onClick={verifyEmail}>Confirm your email address</button>
            </div>
          </div>
          <div className={styles.bottom_part}>
            <Link href="/">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordRequest;
