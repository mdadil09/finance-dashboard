"use client";

import Login from "@/components/Auth/Login";
import { setLogin } from "@/redux/slice/authSlice";
import { handleLogin } from "@/services/api";
import axios from "axios";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Bounce, toast } from "react-toastify";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useTheme();

  return (
    <>
      <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={() =>
          handleLogin(email, password, dispatch, router, theme)
        }
      />
    </>
  );
}
