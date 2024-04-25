"use client";

// import { Footer } from "../Footer";
import { useEffect, useState } from "react";
import Approved from "../Approved";
import Deposits from "../Deposits";
import Navbar from "../Global/Navbar";
import Sidebar from "../Global/Sidebar";
import Payments from "../Payments";
import Quests from "../Quests";
import Requests from "../Requests";

export function DashboardBase({ userType, children }: { userType: string; children: JSX.Element }) {
  return (
    <div className="flex h-screen">
      <Sidebar userType={userType} />
      <div className="flex flex-1 pt-16 flex-col sm:ml-64">
        <Navbar />
        <main className="h-full p-6 bg-neutral-content">{children}</main>
      </div>
    </div>
  );
}

export function UserDashboard({ params }: { params: any }) {
  const tab = params?.sidebar;
  if (tab === "quests") {
    return (
      <DashboardBase userType="user">
        <Quests />
      </DashboardBase>
    );
  }
  if (tab === "deposits") {
    return (
      <DashboardBase userType="user">
        <Deposits />
      </DashboardBase>
    );
  }
  if (tab === "payments") {
    return (
      <DashboardBase userType="user">
        <Payments />
      </DashboardBase>
    );
  }
  if (tab === "help") {
    return (
      <DashboardBase userType="user">
        <div>help</div>
      </DashboardBase>
    );
  }
  if (tab === "settings") {
    return (
      <DashboardBase userType="user">
        <div>settings</div>
      </DashboardBase>
    );
  }

  return (
    <DashboardBase userType="user">
      <div>{tab}</div>
    </DashboardBase>
  );
}

export function InvestorDashboard({ params }: { params: any }) {
  const tab = params?.sidebar;
  console.log(tab);
  if (tab === "requests") {
    return (
      <DashboardBase userType="investor">
        <Requests />
      </DashboardBase>
    );
  }
  if (tab === "approved") {
    return (
      <DashboardBase userType="investor">
        <Approved />
      </DashboardBase>
    );
  }
  if (tab === "help") {
    return (
      <DashboardBase userType="investor">
        <div>help</div>
      </DashboardBase>
    );
  }
  if (tab === "settings") {
    return (
      <DashboardBase userType="investor">
        <div>settings</div>
      </DashboardBase>
    );
  }
}

const Dashboard = ({ params }: { params: string }) => {
  const [rol, setRol] = useState<string | null>(null);

  useEffect(() => {
    const storedRol = localStorage.getItem("rol");
    setRol(storedRol);
  }, []);

  if (rol === "user") {
    return <UserDashboard params={params} />;
  }
  if (rol === "investor") {
    return <InvestorDashboard params={params} />;
  }
};

export default Dashboard;
