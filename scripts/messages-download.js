const poeditor = require('./poeditor');

(async () => {
  const langIdx = process.argv.indexOf('-lang');
  if (langIdx >= 0 && process.argv.length >= langIdx + 1) {
    const lang = process.argv[langIdx + 1];
    console.log(`download ${lang} locale`);
    poeditor.download(lang, `src/app/locales/${lang}/translation.json`);
  } else {
    console.log('getting available languages');
    const langs = await poeditor.getLanguages();
    console.log('available locales', langs);

    console.log('downloading locales');
    for (let index = 0; index < langs.length; index++) {
      const lang = langs[index];
      console.log('downloading', lang);
      await poeditor.download(lang, `src/app/locales/${lang}/translation.json`);
    }
    console.log('downloading locales finished');
  }
})();
