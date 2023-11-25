"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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
      <div className="flex justify-center justify-items-center m-10">
        <div className="p-9 shadow-2xl w-50 rounded-xl bg-slate-100">
          <div className="mb-5">
            <h1 className="font-mono font-black text-2xl">Sign in</h1>
          </div>
          <div className="mb-2">
            <div>
              <label className="font-mono font-bold">Email</label>
            </div>
            <div className="mb-2">
              <input
                type="text"
                onChange={onChange}
                value={formData.email}
                placeholder="Enter your Email"
                className=" font-mono rounded-2xl border-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus: ring-slate-400 sm:text-sm sm:leading-6"
                name="email"
              />
            </div>
          </div>

          <div className="mb-2">
            <div>
              <label className="font-mono font-bold">Password</label>
            </div>
            <div className="mb-2">
              <input
                value={formData.password}
                onChange={onChange}
                type="password"
                placeholder="Enter your password"
                className="font-mono rounded-2xl border-2 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus: ring-slate-400 sm:text-sm sm:leading-6"
                name="password"
              />
            </div>
          </div>

          <div className="justify-end">
            <div className="rounded-md">
              <button
                onClick={handleSubmit}
                className="rounded-2xl border-2 p-2 shadow-sm text-gray-900 hover:ring-2 ring-slate-800 active:shadow-lg active:bg-slate-400"
              >
                Sign In
              </button>
              <ToastContainer autoClose={1000} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
