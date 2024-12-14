import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { setLogin } from "@/redux/slice/authSlice";

export const handleLogin = async (email, password, dispatch, router, theme) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password },
      config
    );
    router.push("/dashboard");

    const loggedIn = result.data;

    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
    }

    toast.success("Successfully Logged In", {
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
  } catch (error) {
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme === "light" ? "light" : theme === "dark" ? "dark" : "system",
      transition: Bounce,
    });
    console.log(error.response.data);
  }
};
