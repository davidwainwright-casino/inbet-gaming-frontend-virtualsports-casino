import i18next from 'i18next';
import qs from 'qs';

import config from '../api/configLoader';

import enUs from './en-us/translation.json';
import translations from './translations';
translations['en'] = {
  translation: enUs,
};

const DEFAULT_LANGUAGE: string = config.defaultLanguage;
const AVAILABLE_LANGUAGES: string[] = config.availableLanguages;

const getLangCode = (language: string): string => {
  return language.toLowerCase().split(/[_-]+/)[0];
};

const isAvailableLanguage = (language: string): boolean => {
  if (language) {
    const languageWithoutRegionCode = getLangCode(language);

    return AVAILABLE_LANGUAGES.includes(languageWithoutRegionCode);
  } else {
    return false;
  }
};

const getQsLang = (): string | null => {
  const prms = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  if (prms.l && isAvailableLanguage(prms.l)) {
    return prms.l;
  }
  return null;
};

const getNavigatorLanguage = (): string => {
  let locale = DEFAULT_LANGUAGE;

  if (isAvailableLanguage(navigator.language)) {
    locale = getLangCode(navigator.language);
  } else if (navigator.languages) {
    const language = navigator.languages.find((lang) => isAvailableLanguage(lang));
    if (language) {
      locale = getLangCode(language);
    }
  }

  return locale;
};

export const getLanguage = (): string => {
  try {
    const lang = getQsLang();
    if (lang) {
      return getLangCode(lang);
    }
    return getNavigatorLanguage();
  } catch (e) {
    return DEFAULT_LANGUAGE;
  }
};

const currentLanguage = getLanguage();

i18next.init({
  debug: false,
  fallbackLng: DEFAULT_LANGUAGE,
  returnEmptyString: false,
  keySeparator: false,
  lng: currentLanguage,
  nsSeparator: false,
  resources: translations,
});

export default i18next;
