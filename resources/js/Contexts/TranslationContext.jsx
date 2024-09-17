import { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

export const TranslationProvider = ({ children, translations, initialLocale }) => {
    const [locale, setLocale] = useState(initialLocale);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    return (
        <TranslationContext.Provider value={{ locale, setLocale, translations }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => useContext(TranslationContext);
