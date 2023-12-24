import React from "react";
import SignInButton from "../SignInButton";
import SearchProducts from "../Products/SearchProducts";
import CategoriesProducts from "../Products/CategoriesProducts";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-orange-300 to-rose-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">F Commerce</a>
        </div>
        <div className="flex-2">
          <div className="flex justify-between">
            <div className="w-full mx-4">
              <SearchProducts />
            </div>
            <div className="w-full mx-4">
              <CategoriesProducts />
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact bg-gradient-to-r from-orange-300 to-rose-300 dropdown-content w-52 rounded-lg shadow"
            >
              <div className="card-body ">
                <span className="font-bold text-lg text-white">8 Items</span>
                <span className="text-white font-semibold">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn bg-gradient-to-r from-rose-400 to-orange-300 btn-block text-white">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <SignInButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
