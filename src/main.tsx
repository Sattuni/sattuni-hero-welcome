import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FOMOProvider } from "./contexts/FOMOContext";

createRoot(document.getElementById("root")!).render(
  <FOMOProvider>
    <App />
  </FOMOProvider>
);
