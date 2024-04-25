import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div className="flex flex-col justify-between items-baseline h-full">
          <span className="w-full text-3xl font-bold text-white">AndiLending</span>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between md:w-[75%]">
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
            </div>
            <div>2024 AndiLending. All rights reserved</div>
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-around h-full">
          <div>
            <h6 className="font-medium text-white">About us</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Careers</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Legal & Privacy</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-white">Learn</h6>
            <ul>
              <li className="py-2 text-sm">What is Cryptocurrency?</li>
              <li className="py-2 text-sm">Crypto Basic</li>
              <li className="py-2 text-sm">Tips and Tutorials</li>
              <li className="py-2 text-sm">Market Update</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
