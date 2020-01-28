const polka = require('polka');
const rp = require('request-promise');
const parseMtr = require('./parser');

const config = require('../config');

function getUri(params) {
  return `https://www.multitran.com/m.exe?s=${params.query}&l1=${params.langFrom}&l2=${params.langTo}&SHL=1`;
}

polka()
  .get('/', async (req, res) => {
    const html = await rp(getUri(req.query));
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${config.frontPort}`);
    res.end(parseMtr(html));
  })
  .listen(config.backPort, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${config.backPort}`);
  });
