const polka = require('polka');
const rp = require('request-promise');
const parseMtr = require('./parser');

const { PORT = 3000 } = process.env;

function getUri(params) {
  return `https://www.multitran.com/m.exe?s=${params.query}&l1=${params.langFrom}&l2=${params.langTo}&SHL=1`;
}

polka()
  .get('/', async (req, res) => {
    const html = await rp(getUri(req.query));
    res.end(parseMtr(html));
  })
  .listen(PORT, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${PORT}`);
  });
