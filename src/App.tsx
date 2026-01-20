import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnalyticsProvider } from "@/contexts";
import { SiteModeProvider } from "@/contexts/SiteModeContext";
import { usePageTracking } from "@/hooks/usePageTracking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CookieConsent from "./components/features/cookies/CookieConsent";
import ChatbotPositioner from "./components/mobile/ChatbotPositioner";
import GLFOrderButton from "./components/mobile/GLFOrderButton";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import Catering from "./pages/Catering";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Restaurant from "./pages/Restaurant";
import Specialties from "./pages/Specialties";
import Speisekarte from "./pages/Speisekarte";
import CateringDanke from "./pages/CateringDanke";
import Menus from "./pages/Menus";

const queryClient = new QueryClient();

// Component to handle page tracking inside Router
const AppRoutes = () => {
  usePageTracking();
  
  return (
    <Routes>
      {/* Landing / Mode Selection */}
      <Route path="/" element={<Landing />} />
      
      {/* ===== RESTAURANT ROUTES ===== */}
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/restaurant/spezialitaeten" element={<Specialties />} />
      <Route path="/restaurant/speisekarte" element={<Speisekarte />} />
      
      {/* ===== CATERING ROUTES ===== */}
      <Route path="/catering" element={<Catering />} />
      <Route path="/catering/danke" element={<CateringDanke />} />
      <Route path="/catering/menus" element={<Menus />} />
      <Route path="/catering/ueber-uns" element={<AboutUs />} />
      <Route path="/catering/blog" element={<Blog />} />
      <Route path="/catering/blog/buero-lunch-ideen" element={<BlogPost1 />} />
      <Route path="/catering/blog/was-bedeutet-mezze" element={<BlogPost2 />} />
      <Route path="/catering/blog/workshop-catering" element={<BlogPost3 />} />
      
      {/* ===== SHARED / LEGAL ROUTES ===== */}
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      
      {/* Legacy redirects for old URLs */}
      <Route path="/spezialitaeten" element={<Specialties />} />
      <Route path="/speisekarte" element={<Speisekarte />} />
      <Route path="/menus" element={<Menus />} />
      <Route path="/ueber-uns" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/buero-lunch-ideen" element={<BlogPost1 />} />
      <Route path="/blog/was-bedeutet-mezze" element={<BlogPost2 />} />
      <Route path="/blog/workshop-catering" element={<BlogPost3 />} />
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SiteModeProvider>
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
    </SiteModeProvider>
  </QueryClientProvider>
);

export default App;
