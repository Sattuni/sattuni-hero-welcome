import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SEOHead from "./components/common/SEOHead";
import StructuredData from "./components/common/StructuredData";
import Index from "./pages/Index";
import Specialties from "./pages/Specialties";
import Speisekarte from "./pages/Speisekarte";
import Catering from "./pages/Catering";
import AboutUs from "./pages/AboutUs";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import ChatbotPositioner from "./components/mobile/ChatbotPositioner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-hero">
        <Toaster />
        <Sonner />
        <ChatbotPositioner />
        <BrowserRouter>
          <SEOHead />
          <StructuredData />
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
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;