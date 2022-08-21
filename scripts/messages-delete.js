const poeditor = require('./poeditor');

const termIdx = process.argv.indexOf('-term');
if (termIdx >= 0 && process.argv.length >= termIdx + 1) {
  const term = process.argv[termIdx + 1];
  console.log('delete term ', term);

  poeditor.delete(term);
} else {
  console.log('argument -term is required ');
}
