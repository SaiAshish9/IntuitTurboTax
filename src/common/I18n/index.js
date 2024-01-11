import { createI18n } from "react-router-i18n";

import locales from "constants/locales";
import translations from "constants/translations";

const translation = {
  en: {},
  es: {},
};

translations.forEach((e) => {
  translation["en"][`${e.text}`] = e.en;
  translation["es"][`${e.text}`] = e.es;
});

const I18n = createI18n(locales, translation);

export default I18n;
