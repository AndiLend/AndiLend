import { InvestorDashboard } from "~~/components/DashboardBase";

const page = ({ params }: { params: string }) => {
  return (
    <div>
      <InvestorDashboard params={params} />
      {/* <UserDashboard params={params} /> */}
    </div>
  );
};

export default page;
