"use client";

import MobileNav from "@/components/mobileNav/MobileNav";
import Navbar from "@/components/navbar/Navbar";
import Sidenav from "@/components/sidebar/Sidenav";
import useWindowDimensions from "@/hooks/useDimension";
import React, { createContext, useEffect, useState } from "react";
import "@/app/globals.css";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "@/redux/slice/authSlice";

export const DataContext = createContext();

const Layout = ({ children }) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isNavLogo, setIsNavLogo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(true);
  const [dark, setDark] = useState(false);
  const [isSystem, setIsSystem] = useState(false);
  const { width } = useWindowDimensions();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLightTheme = () => {
    setTheme("light");
    setIsClicked(true);
    setDark(false);
    setIsSystem(false);
  };

  const handleDarkTheme = () => {
    setTheme("dark");
    setIsClicked(false);
    setDark(true);
    setIsSystem(false);
  };

  const handleSystemTheme = () => {
    setTheme("system");
    setIsClicked(false);
    setDark(false);
    setIsSystem(true);
  };

  useEffect(() => {
    if (width < 940) {
      setIsResponsive(true);
    } else {
      setIsResponsive(false);
    }

    if (!user) {
      router.push("/");
    }
  }, [width, router, user]);

  const handleNavClick = () => {
    if (width > 940) {
      setIsResponsive((prev) => !prev);
      setIsNavLogo((prev) => !prev);
    } else {
      setIsActive(true);
      setIsNavLogo((prev) => !prev);
    }
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };

  const handleLogOut = () => {
    router.push("/");
    dispatch(
      setLogout({
        user: null,
        token: null,
      })
    );
    localStorage.removeItem("email");
  };

  return (
    <>
      <Navbar
        isResponsive={isResponsive}
        isNavLogo={isNavLogo}
        handleNavClick={handleNavClick}
        handleLogOut={handleLogOut}
      />
      <DataContext.Provider
        value={{
          isResponsive,
          isNavLogo,
          isClicked,
          dark,
          isSystem,
          handleLightTheme,
          handleDarkTheme,
          handleSystemTheme,
        }}
      >
        <div
          style={{
            marginLeft: !isResponsive ? "16%" : "20px",
            position: "absolute",
            top: "13%",
          }}
        >
          {children}
        </div>
      </DataContext.Provider>
      {!isResponsive ? (
        <Sidenav isResponsive={isResponsive} handleLogOut={handleLogOut} />
      ) : isResponsive && width < 940 && isActive ? (
        <MobileNav
          isActive={isActive}
          handleCloseClick={handleCloseClick}
          handleLogOut={handleLogOut}
        />
      ) : null}
    </>
  );
};

export default Layout;
