// import { Footer } from "../Footer";
import Navbar from "../Global/Navbar";
import Sidebar from "../Global/Sidebar";
import Quests from "../Quests";

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
        <div>deposits</div>
      </DashboardBase>
    );
  }
  if (tab === "payments") {
    return (
      <DashboardBase userType="user">
        <div>deposits</div>
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
  console.log(params);
  return (
    <DashboardBase userType="investor">
      <div>InvestorDashboard</div>
    </DashboardBase>
  );
}
