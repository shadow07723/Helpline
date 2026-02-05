import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create context
const LanguageContext = createContext();

// 2️⃣ Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en",
  );

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3️⃣ Custom hook
export const useLanguage = () => useContext(LanguageContext);
