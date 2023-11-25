"use client";
import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
    password: "",
    roles: "user",
  });

  const becomeSeller = () => {
    setFormData({
      ...formData,
      roles: "seller",
    });
  };

  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("FORM:", formData);
    try {
      const res = await axios.post(
        "http://localhost:5005/api/auth/register",
        formData
      );
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
    }

    setFormData({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      address: "",
      password: "",
      roles: "",
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
          <div className="grid grid-cols-2 p-9 shadow-2xl rounded-3xl bg-gradient-to-r from-cyan-50 to-blue-100">
            <div className="mb-4 mx-1 col-span-full">
              <Box sx={{ width: "100%", maxWidth: 500 }}>
                <Typography variant="h5" gutterBottom>
                  Create Your Account
                </Typography>
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
                  type="text"
                  id="outlined-basic"
                  label="First Name"
                  color="secondary"
                  variant="outlined"
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={onChange}
                  value={formData.firstName}
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
                  type="text"
                  id="outlined-basic"
                  label="Last Name"
                  color="secondary"
                  variant="outlined"
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={onChange}
                  value={formData.lastName}
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
                  type="text"
                  id="outlined-basic"
                  label="Mobile"
                  color="secondary"
                  variant="outlined"
                  placeholder="Enter your mobile number"
                  name="mobile"
                  onChange={onChange}
                  value={formData.mobile}
                />
              </Box>
            </div>

            <div className="mb-2 col-span-full mx-1">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "61ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  type="text"
                  id="outlined-multiline-static"
                  label="Address"
                  multiline
                  rows={4}
                  color="secondary"
                  placeholder="Enter your complete address"
                  name="address"
                  onChange={onChange}
                  value={formData.address}
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
            <div className="mb-2 mx-1 border border-slate-400 rounded-md flex justify-center items-center">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={becomeSeller}
                      value={formData.roles}
                      name="roles"
                      color="secondary"
                    />
                  }
                  label="Want to become a seller?"
                />
              </FormGroup>
            </div>
            <div className="mb-2 mx-1 col-span-full">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<LoginIcon />}
                  className="w-full"
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

export default SignUp;
