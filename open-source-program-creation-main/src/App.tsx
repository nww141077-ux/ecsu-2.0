import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import EgsuDashboard from "./pages/EgsuDashboard";
import EgsuReport from "./pages/EgsuReport";
import EgsuDocs from "./pages/EgsuDocs";
import EgsuBusiness from "./pages/EgsuBusiness";
import EgsuLegal from "./pages/EgsuLegal";
import EgsuApi from "./pages/EgsuApi";
import EgsuFinance from "./pages/EgsuFinance";
import EgsuSecurity from "./pages/EgsuSecurity";
import EgsuAnalytics from "./pages/EgsuAnalytics";
import EgsuNotifications from "./pages/EgsuNotifications";
import EgsuCpvoa from "./pages/EgsuCpvoa";
import EgsuInstall from "./pages/EgsuInstall";
import EgsuEmergency from "./pages/EgsuEmergency";
import EgsuAppeal from "./pages/EgsuAppeal";
import EgsuRewards from "./pages/EgsuRewards";
import EgsuForUsers from "./pages/EgsuForUsers";
import EgsuExport from "./pages/EgsuExport";
import EgsuCapabilities from "./pages/EgsuCapabilities";
import EgsuArk from "./pages/EgsuArk";
import EgsuMigration from "./pages/EgsuMigration";
import EgsuStart from "./pages/EgsuStart";
import EgsuVip from "./pages/EgsuVip";
import EgsuOrgans from "./pages/EgsuOrgans";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import MyModel from "./pages/MyModel";
import EgsuAiControl from "./pages/EgsuAiControl";
import EgsuRospatent from "./pages/EgsuRospatent";
import EgsuEarth from "./pages/EgsuEarth";
import UserAuth from "./pages/UserAuth";
import EgsuAiConfig from "./pages/EgsuAiConfig";
import EgsuGraphium from "./pages/EgsuGraphium";
import EgsuCivilClaims from "./pages/EgsuCivilClaims";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const Router = window.location.protocol === "file:" ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/app" element={<Dashboard />} />
          <Route path="/egsu" element={<Navigate to="/egsu/start" replace />} />
          <Route path="/egsu/start" element={<EgsuStart />} />
          <Route path="/egsu/dashboard" element={<EgsuDashboard />} />
          <Route path="/egsu/report" element={<EgsuReport />} />
          <Route path="/egsu/docs" element={<EgsuDocs />} />
          <Route path="/egsu/business" element={<EgsuBusiness />} />
          <Route path="/egsu/legal" element={<EgsuLegal />} />
          <Route path="/egsu/api" element={<EgsuApi />} />
          <Route path="/egsu/finance" element={<EgsuFinance />} />
          <Route path="/egsu/security" element={<EgsuSecurity />} />
          <Route path="/egsu/owner" element={<Navigate to="/egsu/owner-locked" replace />} />
          <Route path="/egsu/owner-locked" element={<OwnerLocked />} />
          <Route path="/egsu/analytics" element={<EgsuAnalytics />} />
          <Route path="/egsu/notifications" element={<EgsuNotifications />} />
          <Route path="/egsu/cpvoa" element={<EgsuCpvoa />} />
          <Route path="/egsu/install" element={<EgsuInstall />} />
          <Route path="/egsu/emergency" element={<EgsuEmergency />} />
          <Route path="/egsu/appeal" element={<EgsuAppeal />} />
          <Route path="/egsu/rewards" element={<EgsuRewards />} />
          <Route path="/egsu/for-users" element={<EgsuForUsers />} />
          <Route path="/egsu/export" element={<EgsuExport />} />
          <Route path="/egsu/capabilities" element={<EgsuCapabilities />} />
          <Route path="/egsu/ark" element={<EgsuArk />} />
          <Route path="/egsu/migration" element={<EgsuMigration />} />
          <Route path="/egsu/vip" element={<EgsuVip />} />
          <Route path="/egsu/organs" element={<EgsuOrgans />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route path="/my-model" element={<MyModel />} />
          <Route path="/egsu/ai-control" element={<EgsuAiControl />} />
          <Route path="/egsu/rospatent" element={<EgsuRospatent />} />
          <Route path="/egsu/earth" element={<EgsuEarth />} />
          <Route path="/login" element={<UserAuth />} />
          <Route path="/register" element={<UserAuth />} />
          <Route path="/egsu/ai-config" element={<EgsuAiConfig />} />
          <Route path="/egsu/graphium" element={<EgsuGraphium />} />
          <Route path="/egsu/civil-claims" element={<EgsuCivilClaims />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

function OwnerLocked() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6" style={{ background: "#060a12", color: "white" }}>
      <section className="max-w-lg rounded-2xl p-8 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(168,85,247,0.25)" }}>
        <div className="text-4xl mb-4" aria-hidden="true">🔒</div>
        <h1 className="text-xl font-bold">Функции владельца временно отключены</h1>
        <p className="mt-3 text-sm text-white/60">Доступ будет восстановлен после настройки серверной авторизации и защищённого хранения документов. Вход по паролю пока недоступен.</p>
        <a className="inline-block mt-6 text-sm underline" style={{ color: "#00ff87" }} href={window.location.protocol === "file:" ? "#/egsu/start" : "/egsu/start"}>На главную ECSU</a>
      </section>
    </main>
  );
}

export default App;
