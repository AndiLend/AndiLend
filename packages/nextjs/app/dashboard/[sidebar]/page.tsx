import { UserDashboard } from "~~/components/DashboardBase";

const page = ({ params }: { params: string }) => {
  return (
    <>
      {/* <InvestorDashboard /> */}
      <UserDashboard params={params} />
    </>
  );
};

export default page;
