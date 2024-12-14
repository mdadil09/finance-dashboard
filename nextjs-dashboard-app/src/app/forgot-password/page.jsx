"use client";

import ForgotPasswordRequest from "@/components/Auth/ForgotPasswordRequest";
import EmailSuccess from "@/components/misc/authModal/EmailSuccess";
import axios from "axios";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const verifyEmail = async () => {
    try {
      const result = await axios.post(
        "http://localhost:5000/api/auth/requestPasswordReset",
        { email }
      );

      toast.success(
        "Password reset code has been sent successfully to your email",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme:
            theme === "light" ? "light" : theme === "dark" ? "dark" : "system",
          transition: Bounce,
        }
      );

      setIsEmailSent(true);

      console.log(result);
    } catch (error) {
      toast.error(error.response?.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:
          theme === "light" ? "light" : theme === "dark" ? "dark" : "system",
        transition: Bounce,
      });
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <>
      {!isEmailSent ? (
        <ForgotPasswordRequest
          email={email}
          setEmail={setEmail}
          verifyEmail={verifyEmail}
        />
      ) : (
        <EmailSuccess email={email} />
      )}
    </>
  );
};

export default ForgotPassword;
