import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ApiService from "../services/ApiService";

const Register = () => {
  const url = "http://localhost:5005/api/";
  const register = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const mobile = formData.get("mobile");
    const roles = formData.get("roles");
    const address = formData.get("address");
    console.log("FormData:", formData);

    // Validate the form data and save it to the database

    const res = await ApiService.post("auth/register", formData);

    const user = res.data.data.user;
    cookies().set("user", user);
    redirect("/validate-otp");

    // const res = await fetch(`${url}auth/register`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // const auth = await res.json();

    // const token = auth.data.access_token;

    // cookies().set("authToken", token);

    // redirect("/");
  };
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-full shadow-2xl bg-gradient-to-r from-orange-300 to-rose-300">
            <form action={register} className="card-body">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-white text-lg font-semibold">
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg font-semibold">
                      Last Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg font-semibold">
                      Mobile
                    </span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a className="label-text-alt link link-hover text-white text-lg font-semibold">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-12">
                  <label className="label cursor-pointer">
                    <span className="label-text text-white text-lg font-semibold">
                      Want to become Seller?
                    </span>
                    <input
                      name="is_Seller"
                      type="checkbox"
                      className="checkbox border border-white"
                      value={"seller"}
                    />
                  </label>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white text-lg font-semibold">
                    Address
                  </span>
                </label>
                <textarea
                  name="address"
                  placeholder="Enter your complete address here"
                  className="input input-bordered min-h-[120px]"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <div className="text-center form-control  w-full">
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-rose-400 to-orange-300 text-white text-lg font-semibold"
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <label className="label">
                  <span className="label-text text-white text-lg font-semibold">
                    Already have a account ?
                    <span className="mx-3 text-red-800 text-lg font-semibold">
                      <Link href={"/login"}>Login</Link>
                    </span>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
