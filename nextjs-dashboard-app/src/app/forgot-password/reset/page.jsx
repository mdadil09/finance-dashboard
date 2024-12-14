"use client";

import ResetPasswordLayout from "@/components/Auth/ResetPasswordLayout";
import PasswordResetSuccess from "@/components/misc/authModal/passwordResetSuccess/PasswordResetSuccess";
import React, { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { handleLogin } from "@/services/api";

const ResetPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const userId = searchParams.get("id");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword) {
      setMessage("Password Matched");

      const hideTimeout = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(hideTimeout);
    }

    setEmail(localStorage.getItem("email"));
  }, [password, confirmPassword]);

  const resetPassword = async () => {
    try {
      const result = await axios.post(
        "http://localhost:5000/api/auth/resetPassword",
        { userId, token, password }
      );

      toast.success("Password Successfully changed", {
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

      console.log(result);
      setIsSuccess(true);
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
    }
  };
  return (
    <>
      {!isSuccess ? (
        <ResetPasswordLayout
          password={password}
          confirmPassword={confirmPassword}
          setPassword={setPassword}
          setConfirmpassword={setConfirmpassword}
          resetPassword={resetPassword}
          message={message}
        />
      ) : (
        <PasswordResetSuccess
          handleLogin={() =>
            handleLogin(email, password, dispatch, router, theme)
          }
        />
      )}
    </>
  );
};

export default ResetPassword;
