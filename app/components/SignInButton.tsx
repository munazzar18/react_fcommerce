import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton";

const SignInButton = async () => {
  const token = cookies().get("authToken");
  const user = cookies().get("user");
  const userValue = user?.value;
  const parsedUserName = userValue ? JSON.parse(userValue) : null;
  const username = parsedUserName?.username;

  if (token)
    return (
      <>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost border border-orange-400"
          >
            <div className="mx-2">
              <p className="text-black text-lg font-semibold">{username}</p>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-orange-300 to-rose-300 rounded-box w-52"
          >
            <li>
              <a className="justify-between text-lg">Profile</a>
            </li>
            <li>
              <a className="text-lg">Settings</a>
            </li>
            <li>
              {/* <button className="text-lg">Logout</button> */}
              <LogoutButton />
            </li>
          </ul>
        </div>
      </>
    );
  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost border border-orange-400 mx-3"
        >
          <div className="w-10">Get Started</div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-orange-300 to-rose-300 rounded-box w-52"
        >
          <li>
            <Link href={"/login"} className="justify-between text-lg">
              Sign In
            </Link>
          </li>
          <li>
            <Link href={"/register"} className=" text-lg">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SignInButton;
