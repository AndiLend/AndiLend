import { InvestorDashboard, UserDashboard } from "~~/components/DashboardBase";

const page = ({ params }: { params: string }) => {
  const rol = "user";
  if (rol === "user") {
    return <UserDashboard params={params} />;
  }
  if (rol === "investor") {
    return <InvestorDashboard params={params} />;
  }
};

export default page;
