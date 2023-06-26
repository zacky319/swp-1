
import React, { ReactNode, createContext } from "react";
import { en } from "../language/en";
import { useStorage } from "../hooks/useLocalStorage";

import { RoutDef, RouteItem, routs_en, routs_vn } from "../constants/ROUT";
import { vn } from "../language/vn";


export type LanguageType = "en" | "vn"
interface LanguageContextType {
    setLanguage: (lang: LanguageType) => void;
    language: LanguageType;
    text: typeof en;
    routs:Record<RoutDef,RouteItem>
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useStorage<LanguageType>("LANG", "en")
    const text = language === "en" ? en : vn
    const routs = language === "en" ? routs_en : routs_vn
    return (
        <>
            <LanguageContext.Provider value={{ language, setLanguage, text, routs }}>
                {children}
            </LanguageContext.Provider>
        </>
    )
}