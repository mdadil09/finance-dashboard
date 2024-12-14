"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./profileLayout.module.css";
import { employee } from "@/config/employeeData";
import PersonalInfo from "../personalInfo/PersonalInfo";
import EmployeeDetails from "../employeeDetails/EmployeeDetails";
import PrimaryAddress from "../primaryAddress/PrimaryAddress";
import Meeting from "../meeting/Meeting";
import Leave from "../leave/Leave";
import dynamic from "next/dynamic";
import Vacation from "../misc/Vacation";
import { DataContext } from "@/app/dashboard/layout";
import { useSelector } from "react-redux";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

// import Week from "../misc/Week";

const Week = dynamic(() => import("../misc/Week"), { ssr: false });

const ProfileLayout = () => {
  const { isResponsive } = useContext(DataContext);
  const [profileData, setProfileData] = useState();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const getProfileData = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const result = await axios.get(
        "http://localhost:5000/api/employee/employeeData",
        config
      );

      setProfileData(result.data);
    } catch (error) {
      console.error(
        "Error fetching profile data: ",
        error.response || error.message
      );
    }
  };

  useEffect(() => {
    if (token) {
      getProfileData();
    }
  }, [token]);

  console.log("profileData: ", profileData);
  console.log("token: ", token);
  console.log("user: ", user);

  if (!profileData || Object.keys(profileData).length === 0) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <InfinitySpin
          height="200"
          width="200"
          color="#007fff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      <div className={styles.profile_container}>
        <div className={styles.profile_header}>
          <div className={styles.heading}>
            <div className={styles.h_left}>
              <img src={user.image} alt="" />
              <div className={styles.left_text}>
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <p>Finance Analyst</p>
              </div>
            </div>
          </div>
        </div>
        <div className={isResponsive ? styles.card : styles.card_small}>
          <PersonalInfo personalInfo={profileData.personalInfo} />
          <EmployeeDetails employeeInfo={profileData.employeeInfo} />
          <PrimaryAddress employeeInfo={profileData.employeeInfo} />
        </div>

        <div className={isResponsive ? styles.card : styles.card_small}>
          <Meeting employeeInfo={profileData.employeeInfo} />
        </div>

        <div className={styles.bottom_part}>
          <div
            className={
              isResponsive
                ? styles.card_bottom_one
                : styles.card_bottom_one_small
            }
          >
            <Leave employeeInfo={profileData.employeeInfo} />
          </div>
          <div className={styles.card_bottom_two}>
            <Week />
            <Vacation employeeInfo={profileData.employeeInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
