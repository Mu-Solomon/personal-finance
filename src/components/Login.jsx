import React, { useState } from "react";

import admin from "../assets/images/admin.jpg";

function Login({
  credentials,
  handleCredentialsChange,
  handleLogin,
  isLoggedIn,
}) {
  return (
    <div className="relative">
      {/* Gray background overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 "></div>

      {/* Modal container */}
      <div className="w-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col overflow-y-auto max-h-screen overflow-hidden">
        {/*Modal content */}
        <div className="w-3/4 mx-auto">
          <div className="text-center mb-8">
            <img
              src={admin}
              className="rounded-full w-32 mx-auto mb-5"
              alt=""
              srcset=""
            />
            <span className="text-4xl">KOJJA LOGIN</span>
          </div>

          <div className="mt-8">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm mb-2"
            >
              USERNAME{" "}
            </label>
            <div className="flex items-center">
              <input
                id="username"
                name="username"
                className="border rounded-sm w-full py-4 px-4 text-gray-700"
                type="text"
                value={credentials.username}
                onChange={(event) =>
                  handleCredentialsChange("username", event.target.value)
                }
              />
            </div>
          </div>
          <div className="mt-8">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm mb-2"
            >
              PASSWORD{" "}
            </label>
            <div className="flex items-center">
              <input
                id="password"
                name="password"
                className="border rounded-sm w-full py-4 px-4 text-gray-700"
                type="password"
                value={credentials.password}
                onChange={(event) =>
                  handleCredentialsChange("password", event.target.value)
                }
              />
            </div>
          </div>
          {!isLoggedIn && isLoggedIn !== "" ? (
            <span className="text-rose-600 mt-5">Invalid details</span>
          ) : (
            ""
          )}

          <div className="text-center pt-8">
            <button
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-4 mb-3 px-12 rounded-full focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
