"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { RainbowKitCustomConnectButton } from "../scaffold-eth";
import "./LoginUser.css";

const LoginUser = () => {
  const router = useRouter();
  const handleLoginUser = (e: any) => {
    e.preventDefault();
    localStorage.setItem("rol", "user");
    router.push("/dashboard/quests", { scroll: false });
  };

  return (
    <div className="container-login">
      <div className="left bg-primary">
        <div className="left-login ">
          <div className="text-center leading-10">
            <p className="text-[48px] font-bold">Do you want a loan?</p>
            <p className="text-[48px] font-bold">Start here...</p>
            <p className="text-[20px] font-bold py-1">In order to register, you must request your score first</p>
          </div>
          <Image src="/assets/wallet.png" alt="Wallet Image" width={558} height={391} />
        </div>
      </div>

      <div className="right">
        <div className="right-login">
          <p className="text-[40px] font-bold text-center text-[#5100D7] underline underline-offset-8">
            Register as user
          </p>
          <p className="text-[40px] font-bold text-center text-[#5100D7] underline underline-offset-8">
            Register as user
          </p>

          <form className="space-y-6 form-login" action="#" method="POST">
            <div className="form-login-input">
              <div>
                <label htmlFor="wallet" className="text-sm font-medium text-gray-700">
                  Connect your wallet
                </label>
                <div className="mt-1 rounded-md border-solid border-gray-300 bg-indigo-600 p-2 flex justify-center">
                  <RainbowKitCustomConnectButton />
                </div>
              </div>
              <div>
                <label htmlFor="national-identity" className="text-sm font-medium text-gray-700">
                  National Identity
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="national-identity"
                    id="national-identity"
                    className="text-black block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="0000000005-9"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="national-identity-upload" className="text-sm font-medium text-gray-700">
                  Upload a pic of your National Identity
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    name="national-identity-upload"
                    id="national-identity-upload"
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="form-submit">
              <button
                onClick={handleLoginUser}
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
              >
                Get Credit Score
              </button>

              <div className="text-sm font-medium text-center text-[#999999]">
                Already a user?{" "}
                <a href="#" className="text-indigo-600 underline underline-offset-4 font-bold">
                  LOGIN HERE
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
