import React from "react";

const CryptoCapHome = () => {
  const AImage = "/assets/cryptoA.png";
  const BImage = "/assets/cryptoB.png";
  const CImage = "/assets/cryptoC.png";
  const DImage = "/assets/cryptoD.png";

  return (
    <div className="w-full py-[15rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-4">
        <div className="w-full shadow-xl flex flex-col p-4 my-28 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={AImage} alt="" />
          <div className=" font-medium">
            <p className="py-2 border-b  mt-8 text-black">
              Buy and sell popular digital currencies, keep track of them in the one place.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            {" "}
            See Explained
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-28 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={BImage} alt="" />
          <div className=" font-medium">
            <p className="py-2 border-b  mt-8 text-black">
              All cash balances are covered by FDIC insurance, up to a maximum of $250.000
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            See Explained
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-28 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={CImage} alt="" />
          <div className=" font-medium">
            <p className="py-2 border-b  mt-8 text-black">
              Support a variety of the most popular digital currencies and always update.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            See Explained
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-28 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={DImage} alt="" />
          <div className=" font-medium">
            <p className="py-2 border-b  mt-8 text-black">
              Easy to know how to cryptocurrency works and friendly to newbie.
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            {" "}
            See Explained
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoCapHome;
