import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./ScrollToTop.jsx";
import LanguageProvider from "./LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <LanguageProvider>
      <ScrollToTop />
      <App />
    </LanguageProvider>
  </HashRouter>,
);
