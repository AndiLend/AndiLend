import React from "react";

const HeaderPage = ({ title, description }: any) => {
  return (
    <div className="px-0">
      <div className="text-5xl font-bold text-secondary mb-4">{title}</div>
      <div className="text-2xl text-slate-500">{description}</div>
    </div>
  );
};

export default HeaderPage;
