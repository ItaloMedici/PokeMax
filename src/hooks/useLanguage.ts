import React from "react";
import { LanguageContext } from "../context/LanguageProvider";

export const useLanguage = () => React.useContext(LanguageContext)