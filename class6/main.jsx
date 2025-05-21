import React from "react";
import { createRoot } from "react-dom/client";
import WebRoutes from "./Routes";
import "./assets/main.css"; // ✅ Tailwind/DaisyUI CSS imported here

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <WebRoutes />
  </React.StrictMode>
);
