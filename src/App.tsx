import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnalyticsProvider } from "@/contexts";
import { usePageTracking } from "@/hooks/usePageTracking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CookieConsent from "./components/features/cookies/CookieConsent";
import ChatbotPositioner from "./components/mobile/ChatbotPositioner";
import GLFOrderButton from "./components/mobile/GLFOrderButton";
import AboutUs from "./pages/AboutUs";
import Catering from "./pages/Catering";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Specialties from "./pages/Specialties";
import Speisekarte from "./pages/Speisekarte";

const queryClient = new QueryClient();

// Component to handle page tracking inside Router
const AppRoutes = () => {
  usePageTracking();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/spezialitaeten" element={<Specialties />} />
      <Route path="/speisekarte" element={<Speisekarte />} />
      <Route path="/catering" element={<Catering />} />
      <Route path="/ueber-uns" element={<AboutUs />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AnalyticsProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-hero">
          <Toaster />
          <Sonner />
          <ChatbotPositioner />
          <CookieConsent />
          <GLFOrderButton />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </AnalyticsProvider>
  </QueryClientProvider>
);

export default App;