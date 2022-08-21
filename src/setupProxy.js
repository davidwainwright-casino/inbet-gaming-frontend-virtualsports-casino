const proxy = require('http-proxy-middleware');
const packageJson = require('../package.json');

module.exports = function(app) {
  app.use(
    proxy('/bets', {
      target: packageJson.proxyUrl,
      autoRewrite: false,
      ws: true,
      changeOrigin: true,
    }),
  );
};
