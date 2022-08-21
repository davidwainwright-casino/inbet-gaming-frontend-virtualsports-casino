require('tls').DEFAULT_ECDH_CURVE = 'auto';
const fs = require('fs');
const request = require('request');
const { StringDecoder } = require('string_decoder');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;

if (!process.env.POEDITOR_PROJECT_ID) {
  throw 'environment variable POEDITOR_PROJECT_ID is not set';
}
if (!process.env.POEDITOR_API_TOKEN) {
  throw 'environment variable POEDITOR_API_TOKEN is not set';
}

const PROJECT_ID = process.env.POEDITOR_PROJECT_ID;
const API_TOKEN = process.env.POEDITOR_API_TOKEN;

const upload = (lang, path, overwrite, sync) => {
  return new Promise(function(resolve, reject) {
    const formData = {
      api_token: API_TOKEN,
      action: 'upload',
      id: PROJECT_ID,
      updating: 'terms_definitions',
      language: lang,
      overwrite: overwrite ? 1 : 0,
      sync_terms: sync ? 1 : 0,
      file: {
        value: fs.createReadStream(path),
        options: {
          filename: lang + '.json',
          contentType: 'application/json',
        },
      },
    };

    request
      .post({
        url: 'https://poeditor.com/api/',
        formData,
      })
      .on('data', (data) => {
        let res = new StringDecoder('utf8').end(data);
        res = JSON.parse(res);
        console.log('poeditor upload: ', res);
        resolve();
      });
  });
};

const download = (lang, path) => {
  return new Promise(function(resolve, reject) {
    const formData = {
      api_token: API_TOKEN,
      action: 'export',
      id: PROJECT_ID,
      type: 'key_value_json',
      language: lang,
    };

    request
      .post({
        url: 'https://poeditor.com/api/',
        formData,
      })
      .on('data', (data) => {
        let res = new StringDecoder('utf8').end(data);
        res = JSON.parse(res);
        if (res.item) {
          const dirName = getDirName(path);
          mkdirp.sync(dirName);
          stream = fs.createWriteStream(path);
          request
            .get(res.item)
            .on('data', (data) => {
              stream.write(data);
            })
            .on('end', () => {
              console.log('writing ' + res.item + ' to ' + path);
              stream.end();
              resolve();
            });
        } else {
          console.log('download error ', res);
          reject();
        }
      });
  });
};

const deleteTerm = (term) => {
  var data = [{ term: term, context: '' }];
  console.log('poeditor delete: ', data);

  return new Promise(function(resolve, reject) {
    const formData = {
      api_token: API_TOKEN,
      id: PROJECT_ID,
      data: JSON.stringify(data),
    };

    request
      .post({
        url: 'https://api.poeditor.com/v2/terms/delete',
        formData,
      })
      .on('data', (data) => {
        let res = new StringDecoder('utf8').end(data);
        res = JSON.parse(res);
        console.log('poeditor delete result: ', res);
        resolve();
      });
  });
};

const getLanguages = (path) => {
  return new Promise(function(resolve, reject) {
    const formData = {
      api_token: API_TOKEN,
      id: PROJECT_ID,
    };

    request
      .post({
        url: 'https://api.poeditor.com/v2/languages/list',
        formData,
      })
      .on('data', (data) => {
        let res = new StringDecoder('utf8').end(data);
        res = JSON.parse(res);
        if (res.result) {
          const codes = res.result.languages.map((l) => l.code);
          if (path) {
            const codesJson = JSON.stringify(codes);
            mkdirp(getDirName(path));
            fs.writeFile(path, codesJson, 'utf8', () => {
              console.log('writing ' + codesJson + ' to ' + path);
              resolve(codes);
            });
          } else {
            resolve(codes);
          }
        } else {
          console.log('get languages error ', res);
          reject();
        }
      });
  });
};

module.exports = {
  download,
  upload,
  delete: deleteTerm,
  getLanguages,
};
