import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/context-provider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextProvider>
);
