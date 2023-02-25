import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { messages, Languages } from "../i18n"
 
type LanguageContextProps = {
  language: Languages,
  changeLanguage(lang: Languages): void
}

export const LanguageContext = React.createContext<LanguageContextProps>({} as LanguageContextProps);

const LanguageProvider = ({ children }: React.PropsWithChildren) => {
  const [language, setLanguage] = useState<Languages>(Languages.ptBR);

  const changeLanguage = (lang: Languages) => {
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <IntlProvider
        locale={language}
        messages={messages[language]}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export { LanguageProvider }