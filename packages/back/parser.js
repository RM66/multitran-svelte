const htmlMiner = require('html-miner');
// const createHtmlDom = require('htmldom');
// const { parse } = require('node-html-parser');

const parseMtr = function(html) {
  // const root = parse(html);
  // console.log(root.querySelectorAll('table')[1]);
  // const $ = createHtmlDom(html);
  // console.log($('#translation ~ table')[0]);
  const result = htmlMiner(html, '#translation ~ table')[0];
  console.log(result);
  return result;
};

module.exports = parseMtr;
