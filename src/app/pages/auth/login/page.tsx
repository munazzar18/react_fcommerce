"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5005/api/auth/login",
        formData
      );
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      router.push("/");
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex flex-row mt-24 justify-center">
        <div className="p-2 ">
          <img
            src="../../../../../signup-1.png"
            alt="sign up here"
            className="h-[550px]"
          />
        </div>
        <div className="p-2">
          <div className="grid grid-cols-2 w-96 h-[460px] p-9 shadow-2xl rounded-3xl bg-gradient-to-r from-cyan-50 to-blue-100">
            <div className="mb-4 mx-1 col-span-full">
              <Box sx={{ width: "100%", maxWidth: 500 }}>
                <Typography variant="h5" gutterBottom>
                  Welcome Back!
                </Typography>
              </Box>
            </div>

            <div className="mb-2 mx-1 col-span-full">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Email"
                  color="secondary"
                  variant="outlined"
                  placeholder="Enter your email"
                  name="email"
                  onChange={onChange}
                  value={formData.email}
                />
              </Box>
            </div>

            <div className="mb-2 mx-1">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  color="secondary"
                  variant="outlined"
                  placeholder="Enter your password"
                  name="password"
                  onChange={onChange}
                  value={formData.password}
                />
              </Box>
            </div>

            <div className="mb-2 mx-1 col-span-full">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<LoginIcon />}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <ToastContainer autoClose={3000} />
              </Stack>
            </div>
          </div>
        </div>
        <div />
      </div>
    </>
  );
};
export default Login;
