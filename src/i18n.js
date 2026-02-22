import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en-US.json";
import fr from "./locales/fr.json";


i18n
.use(initReactI18next)
.init({
    resources: {
        "en-US": { translation: en },
        "fr": { translation: fr }
    },
    fallbackLng: "en-US",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;