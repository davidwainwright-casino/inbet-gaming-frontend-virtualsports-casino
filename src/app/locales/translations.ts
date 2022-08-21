import i18next from 'i18next';
import config from '../api/configLoader';

const translations: i18next.Resource = {};

config.availableLanguages.forEach((lang: string) => {
  try {
    translations[lang] = { translation: require(`./${lang}/translation.json`) };
  } catch (e) {}
});

export default translations;
