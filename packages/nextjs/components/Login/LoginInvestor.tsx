import React from "react";
import Image from "next/image";
import { RainbowKitCustomConnectButton } from "../scaffold-eth";
import "./LoginInvestor.css";

const LoginInvestor = () => {
  return (
    <div className="container-login">
      <div className="left">
        <div className="left-login ">
          <div className="text-center leading-10">
            <p className="text-[48px] font-bold">Support a project now</p>
          </div>
          <div>
            <Image src="/assets/etherium.png" alt="etherium" width={558} height={391} />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="right-login">
          <p className="text-[40px] font-bold text-center text-[#5100D7] underline underline-offset-8">
            Login as investor
          </p>
          <form className="space-y-6 form-login" action="#" method="POST">
            <div className="form-login-input">
              <div>
                <label htmlFor="wallet" className="text-sm font-medium text-gray-700">
                  Enter your wallet or ENS
                </label>
                <div className="mt-1 rounded-md border-solid border-gray-300 bg-indigo-600 p-2 flex justify-center">
                  <RainbowKitCustomConnectButton />
                </div>
              </div>
              <div>
                <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="*******"
                  />
                </div>
              </div>
            </div>
            <div className="form-submit">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
              >
                Login
              </button>

              <div className="text-sm font-medium text-center text-[#999999]">
                NEW USER ?{" "}
                <a href="#" className="text-indigo-600 underline underline-offset-4 font-bold">
                  SIGN UP
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginInvestor;
