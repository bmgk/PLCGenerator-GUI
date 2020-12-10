import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import resources, { whitelist } from "./resources";

i18n.use(initReactI18next).init({
  lng: "en",
  keySeparator: false,
  whitelist,
  fallbackLng: "en",
  load: "languageOnly",
  resources: resources,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
