"use client";

import React, { useEffect, useState } from "react";
import styles from "./auth.module.css";
import Logo from "../misc/Logo/Logo";
import Link from "next/link";
import axios from "axios";
import { redirect } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import { useTheme } from "next-themes";
import { useDispatch, useSelector } from "react-redux";
import { setRegister } from "@/redux/slice/authSlice";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [dob, setDob] = useState("");
  const [file, setFile] = useState("");
  const [empData, setEmpData] = useState();
  const { theme } = useTheme();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const mergeEmployeeDetails = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.get(
        "http://localhost:5000/api/employee/employeeDetails",
        config
      );

      setEmpData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("mobileNo", mobileNo);
    formData.append("dob", dob);
    formData.append("file", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const result = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
        config
      );
      const regUser = result.data;
      console.log(regUser);

      if (regUser) {
        dispatch(
          setRegister({
            token: regUser.token,
          })
        );
      }
      toast.success("Successfully Registered", {
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
      mergeEmployeeDetails();
      redirect("/login");
    } catch (error) {
      toast.error(error.response.data.message, {
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
      console.log(error.response.data);
    }
  };

  console.log("empData: ", empData);

  useEffect(() => {
    if (token) {
      mergeEmployeeDetails();
    }
  }, [token]);

  return (
    <div className={styles.container}>
      <div className={styles.auth_container}>
        <div className={styles.auth}>
          <div className={styles.auth_headers}>
            <div className={styles.upper_part}>
              <div className={styles.upper_part_text}>Welcome to</div>{" "}
              <div>
                <Logo />
              </div>
            </div>
            <div className={styles.lower_part}>
              Register yourself to N&N finance
            </div>
          </div>
          <div className={styles.auth_form}>
            <div className={styles.input_group}>
              <div className={styles.input}>
                <div className={styles.inputTwo}>
                  <div>
                    <div>
                      <label htmlFor="">First Name</label>
                    </div>
                    <div>
                      {" "}
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="">Last Name</label>
                    </div>
                    <div>
                      {" "}
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">Email</label>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">Mobile No</label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    name="mobileNo"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
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
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  {" "}
                  <label htmlFor="">Confirm Password</label>
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <label htmlFor="">Date of Birth</label>
                  <input
                    type="date"
                    placeholder="Enter your DOB"
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.input}>
                <div>
                  <input
                    type="file"
                    placeholder="Enter your image"
                    name="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className={styles.btn}>
                <button onClick={handleRegister}>Register</button>
              </div>
            </div>
            <div className={styles.bottom_part}>
              Already have account? <Link href="/">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
