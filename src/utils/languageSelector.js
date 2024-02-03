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
  obtainLanguageBasedOnPathname(pathname) == "/en";

export const isEsSelected = (pathname) =>
  obtainLanguageBasedOnPathname(pathname) == "/es";
