import { createI18n } from "react-router-i18n";

import locales from "constants/locales";
import translations from "constants/translations";

const translation = {
  en: {},
};

translations.forEach((e) => {
  translation["en"][`${e.text}`] = e.en;
});

console.log(translations);

const I18n = createI18n(locales, translation);

export default I18n;
