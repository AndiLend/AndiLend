import Dashboard from "~~/components/DashboardBase";

const page = ({ params }: { params: string }) => {
  return <Dashboard params={params} />;
};

export default page;
