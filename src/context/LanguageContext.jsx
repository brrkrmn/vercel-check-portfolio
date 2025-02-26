import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
    const [translations, setTranslations] = useState(null);

    useEffect(() => {
        const fetchTranslations = async () => {
            try {
                const res = await fetch("/locales.json");
                if (!res.ok) throw new Error("Translations could not be loaded");
                const data = await res.json();
                setTranslations(data);
            } catch (error) {
                console.error("Error loading translations:", error);
            }
        };

        fetchTranslations();
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "tr" : "en"));
    };

    const currentTranslations = translations?.[language] || {};

    return (
        <LanguageContext.Provider value={{ language, translations: currentTranslations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};
