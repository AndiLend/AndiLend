import React from "react";
import Image from "next/image";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const index = () => {
  return (
    <div className="bg-purple-800 shadow py-4 px-4 flex justify-end">
      <Image src="/assets/sidebar/bell-ring.svg" alt="ring" width={24} height={24} className="mr-3" />
      <RainbowKitCustomConnectButton />
      <FaucetButton />
    </div>
  );
};

export default index;
