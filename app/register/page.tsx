import Link from "next/link";
import React from "react";

const Register = () => {
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
            <form className="card-body">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-white text-lg font-semibold">
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
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
                      type="checkbox"
                      className="checkbox border border-white"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center form-control  w-3/4">
                  <button className="btn bg-gradient-to-r from-rose-400 to-orange-300 text-white text-lg font-semibold">
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
