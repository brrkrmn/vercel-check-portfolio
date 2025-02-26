import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        fetch("/locales.json")
        .then((res) => res.json())
        .then((data) => {
            setTranslations(data);
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "tr" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("no context")
    return context
}