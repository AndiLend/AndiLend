import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
          <span className="w-full text-3xl font-bold">Crypto</span>
          <span className="w-full text-3xl font-bold text-[#00df9a]">Cap.</span>
          <p className="py-4"></p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">About us</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Careers</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Legal & Privacy</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Services</h6>
            <ul>
              <li className="py-2 text-sm">Applications</li>
              <li className="py-2 text-sm">Buy Crypto</li>
              <li className="py-2 text-sm">Affiliate</li>
              <li className="py-2 text-sm">Institutional Services</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Learn</h6>
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
