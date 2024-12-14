"use client";
import React from "react";
import styles from "./auth.module.css";
import Link from "next/link";
import Logo from "../misc/Logo/Logo";

const Login = ({ email, password, setEmail, setPassword, handleLogin }) => {
  return (
    <div className={styles.auth_container_login}>
      <div className={styles.auth}>
        <div className={styles.auth_headers}>
          <div className={styles.upper_part}>
            <div className={styles.upper_part_text}>Welcome to</div>{" "}
            <div>
              <Logo />
            </div>
          </div>
          <div className={styles.lower_part}>
            Logged In yourself to N&N finance
          </div>
        </div>
        <div className={styles.auth_form}>
          <div className={styles.input_group}>
            <div className={styles.input}>
              <div>
                <label htmlFor="">Email</label>
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
            <div className={styles.input}>
              <div>
                <label htmlFor="">Password</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.btn}>
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
          <div className={styles.forgot_password}>
            <Link href="/forgot-password">Forgot Password?</Link>
          </div>
          <div className={styles.bottom_part}>
            Already have account? <Link href="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
