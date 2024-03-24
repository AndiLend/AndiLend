"use client";

import { InvestorDashboard, UserDashboard } from "~~/components/DashboardBase";

const page = ({ params }: { params: string }) => {
  const rol = localStorage.getItem("rol") || "user";
  if (rol === "user") {
    return <UserDashboard params={params} />;
  }
  if (rol === "investor") {
    return <InvestorDashboard params={params} />;
  }
  if (rol === "user") {
    return <UserDashboard params={params} />;
  }
};

export default page;
