import React from "react";

const HeaderPage = ({ title, description }: any) => {
  return (
    <div>
      <div className="text-5xl font-bold text-[#5100D7] mb-4">{title}</div>
      <div className="text-2xl text-slate-500">{description}</div>
    </div>
  );
};

export default HeaderPage;
