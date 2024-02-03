import { LANGUAGES } from "../constants";

export function obtainLanguageBasedOnPathname(pathname) {
  switch (pathname) {
    case "/":
    case "/en":
      return LANGUAGES.En;
    case "/es":
      return LANGUAGES.Es;
    default:
      return LANGUAGES.En;
  }
}

export const isEnSelected = (pathname) =>
  obtainLanguageBasedOnPathname(pathname) == LANGUAGES.En;

export const isEsSelected = (pathname) =>
  obtainLanguageBasedOnPathname(pathname) == LANGUAGES.Es;
