"use client";

import "react-toastify/dist/ReactToastify.css";
import "../../app/globals.css";
import { Bounce, ToastContainer } from "react-toastify";

export default function ToastProvider({ children }) {
  return (
    <>
      {children}
      <ToastContainer transition={Bounce} />
    </>
  );
}
