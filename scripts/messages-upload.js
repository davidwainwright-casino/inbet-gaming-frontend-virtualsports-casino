const poeditor = require('./poeditor');

let lang = 'en-us';
const langIdx = process.argv.indexOf('-lang');
if (langIdx >= 0 && process.argv.length >= langIdx + 1) {
  lang = process.argv[langIdx + 1];
}

const overwrite = process.argv.indexOf('-overwrite') >= 0;
const sync = process.argv.indexOf('-sync') >= 0;

console.log('upload to', lang, 'overwrite=', overwrite, 'sync=', sync);

poeditor.upload(lang, `src/app/locales/${lang}/translation.json`, overwrite, sync);
