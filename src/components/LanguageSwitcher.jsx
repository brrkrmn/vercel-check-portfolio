import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="language-switcher">
            <span className={`language-option ${language === "en" ? "disabled" : "active"}`}
                onClick={language === "en" ? undefined : toggleLanguage}
            >
                EN
            </span>
            <span className="separator">|</span>
            <span className={`language-option ${language === "tr" ? "disabled" : "active"}`}
                onClick={language === "tr" ? undefined : toggleLanguage}
            >
                TR    
            </span>
        </div>
    )
}

export default LanguageSwitcher;