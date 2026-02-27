import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en-US.json";
import fr from "./locales/fr.json";
import nl from "./locales/nl.json";


i18n
.use(initReactI18next)
.init({
    showSupportNotice: false,
    resources: {
        "en-US": { translation: en },
        "fr": { translation: fr },
        "nl": { translation: nl  }
    },
    fallbackLng: "en-US",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;