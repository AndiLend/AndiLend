import { Footer } from "../Footer";
import Sidebar from "../Global/Sidebar";

export function DashboardBase({ userType, children }: { userType: string; children: JSX.Element }) {
  return (
    <div>
      {/* Componentes comunes */}
      <div>DashboardBase</div>
      <Sidebar userType={userType} />
      {/* Contenido específico */}
      {children}

      <Footer />
    </div>
  );
}

export function ClientDashboard() {
  return (
    <DashboardBase userType="client">
      <h1>ClientDashboard</h1>
    </DashboardBase>
  );
}

export function InvestorDashboard() {
  return (
    <DashboardBase userType="investor">
      <div>InvestorDashboard</div>
    </DashboardBase>
  );
}
