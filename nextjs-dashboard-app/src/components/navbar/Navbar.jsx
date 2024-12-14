"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Bars3BottomLeftIcon, BellAlertIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Logo from "../misc/Logo/Logo";
import { DataContext } from "@/app/dashboard/layout";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setLogout } from "@/redux/slice/authSlice";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ isResponsive, isNavLogo, handleNavClick, handleLogOut }) => {
  const user = useSelector((state) => state.auth.user);
  const [dropClick, setDropClick] = useState(false);
  const [msgClick, setMsgClick] = useState(false);
  const [notiClick, setNotiCLick] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDropClick = () => {
    setDropClick((prev) => !prev);
    setMsgClick(false);
    setNotiCLick(false);
  };

  const handleMsgClick = () => {
    setMsgClick((prev) => !prev);
    setNotiCLick(false);
    setDropClick(false);
  };

  const handleNotiClick = () => {
    setNotiCLick((prev) => !prev);
    setDropClick(false);
    setMsgClick(false);
  };

  return (
    <div className={isResponsive ? styles.navbarRes : styles.navbar}>
      <div className={styles.nav_left}>
        <div className={styles.humburger}>
          <Bars3BottomLeftIcon
            style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
            onClick={handleNavClick}
          />
        </div>
        <div className={styles.nav_logo}>
          {isResponsive ? <Logo isNavLogo={isNavLogo} /> : null}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right_menu} onClick={handleMsgClick}>
          <EnvelopeIcon
            style={{
              height: "1.5rem",
              width: "1.5rem",
              cursor: "pointer",
              backgroundColor: "var(--nav-menu-bg)",
              padding: "5px",
              borderRadius: "50%",
              marginRight: "16px",
            }}
          />
          <div
            className={
              !isResponsive ? styles.circle_msg : styles.circle_msg_big
            }
          ></div>
          {msgClick ? (
            <div
              className={
                !isResponsive
                  ? styles.right_menu_msg
                  : styles.right_menu_msg_big
              }
            >
              <div className={styles.inner_menu}>
                <div className={styles.inner_menu_text}>
                  <h3>Messages</h3>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className={styles.right_menu} onClick={handleNotiClick}>
          <div
            className={
              !isResponsive ? styles.circle_noti : styles.circle_noti_big
            }
          ></div>

          <BellIcon
            style={{
              height: "1.5rem",
              width: "1.5rem",
              cursor: "pointer",
              backgroundColor: "var(--nav-menu-bg)",
              padding: "5px",
              borderRadius: "50%",
            }}
          />
          {notiClick ? (
            <div
              className={
                !isResponsive
                  ? styles.right_menu_noti
                  : styles.right_menu_noti_big
              }
            >
              <div className={styles.inner_menu}>
                <div className={styles.inner_menu_text}>
                  <h3>Subscription</h3>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className={styles.right_menu} onClick={handleDropClick}>
          {user && user.image && <img src={user.image} alt="" />}
          {dropClick ? (
            <div
              className={
                !isResponsive
                  ? styles.right_menu_drop
                  : styles.right_menu_drop_big
              }
            >
              <div className={styles.inner_menu}>
                <div
                  className={styles.inner_menu_text}
                  style={{ paddingBottom: "8px" }}
                >
                  <UserCircleIcon
                    style={{
                      height: "1.25rem",
                      width: "1.25rem",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                  <Link href="/dashboard/profile">Profile</Link>
                </div>
                <div
                  className={styles.inner_menu_text}
                  style={{ paddingBottom: "8px" }}
                >
                  <Cog6ToothIcon
                    style={{
                      height: "1.25rem",
                      width: "1.25rem",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                  <Link href="/dashboard/settings">Setting</Link>
                </div>
                <div className={styles.inner_menu_text}>
                  <PowerIcon
                    style={{
                      height: "1.25rem",
                      width: "1.25rem",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                  <button
                    style={{
                      background: "none",
                      color: "var(--text-color)",
                      fontSize: "1rem",
                      border: "none",
                      fontWeight: "400",
                      cursor: "pointer",
                    }}
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
