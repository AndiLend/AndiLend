import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div className="bg-white shadow py-4 px-4 flex justify-end">
      <Image src="/assets/sidebar/bell-ring.svg" alt="ring" width={24} height={24} className="mr-3" />
      <Image src="/assets/sidebar/user.png" alt="ring" width={40} height={40} />
    </div>
  );
};

export default index;
