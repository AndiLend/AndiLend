import { InvestorDashboard, UserDashboard } from "~~/components/DashboardBase";

const page = ({ params }: { params: string }) => {
  const rol = "investor";
  if (rol === "investor") {
    return <InvestorDashboard params={params} />;
  }
  if (rol === "user") {
    return <UserDashboard params={params} />;
  }
};

export default page;
