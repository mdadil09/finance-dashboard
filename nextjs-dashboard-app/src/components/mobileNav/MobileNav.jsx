"use client";

import React, { useEffect, useState } from "react";
import styles from "./mobileNav.module.css";
import Link from "next/link";
import { sidebarMenu } from "@/config/sidebarMenu";
import Logo from "../misc/Logo/Logo";
import useWindowDimensions from "@/hooks/useDimension";
import { PowerIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const MobileNav = ({ isActive, handleCloseClick, handleLogOut }) => {
  const [menuItems, setMenuItems] = useState(sidebarMenu);

  const { width } = useWindowDimensions();
  const pathname = usePathname();

  useEffect(() => {
    const updatedMenu = menuItems.map((item) =>
      item.url === pathname
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setMenuItems(updatedMenu);
  }, [pathname]);

  return (
    <>
      <div className={styles.sidebar_container}>
        <div className={styles.sidebar_card}>
          <div className={styles.logo}>
            <Logo />
            <XMarkIcon
              style={{
                height: "2rem",
                width: "2rem",
                color: "var(--color-text)",
              }}
              onClick={handleCloseClick}
            />
          </div>
          <div className={styles.sidebar_menu}>
            {menuItems.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                style={{ color: "var(--color-text)" }}
              >
                <div className={item.isActive ? styles.menuHover : styles.menu}>
                  {item.icon}

                  <h5
                    style={{
                      color: "var(--color-text)",
                      fontWeight: "400",
                      marginLeft: "15px",
                      marginRight: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontSize: "16px",
                    }}
                  >
                    {item.name}
                  </h5>
                </div>
              </Link>
            ))}
            <Link href="/" style={{ color: "var(--text-color)" }}>
              <div className={styles.menu} onClick={handleLogOut}>
                <PowerIcon
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    cursor: "pointer",
                  }}
                />

                <h5
                  style={{
                    color: "var(--text-color)",
                    fontWeight: "400",
                    marginLeft: "15px",
                    marginRight: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "16px",
                  }}
                >
                  Log Out
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
