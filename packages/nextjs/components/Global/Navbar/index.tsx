import React from "react";
import Image from "next/image";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const index = () => {
  return (
    <div className="fixed bg-neutral p-4 flex justify-end items-center lex-1 top-0 left-0 right-0 shadow-sm">
      <button>
        <Image src="/assets/sidebar/bell-ring.svg" alt="ring" width={24} height={24} className="mr-3" />
      </button>
      <div>
        <RainbowKitCustomConnectButton />
      </div>
      <FaucetButton />
    </div>
  );
};

export default index;
