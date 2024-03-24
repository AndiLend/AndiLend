// import { Footer } from "../Footer";
import Approved from "../Approved";
import Deposits from "../Deposits";
import Navbar from "../Global/Navbar";
import Sidebar from "../Global/Sidebar";
import Payments from "../Payments";
import Quests from "../Quests";
import Requests from "../Requests";

export function DashboardBase({ userType, children }: { userType: string; children: JSX.Element }) {
  return (
    <>
      <div className="flex">
        <Sidebar userType={userType} />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </>
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
