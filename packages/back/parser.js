const htmlMiner = require('html-miner');
// const createHtmlDom = require('htmldom');
// const { parse } = require('node-html-parser');

/* Html structure:
<body>
  …
  <div class="container" id="start">
    …
    <table>…</table>
    …
    <div class="middle_col">
      <!--<div class="search">// -->
      <form id="translation" … >
      <!--</div>// -->
      <table width="100%">
        <tbody>
          …
          <tr>
            <td … class="gray">
              &nbsp;
              <a href="…">computer</a>
              <span …>[kəm'pju:tə]</span> <em>n</em>
              <span class="small">…</span>
            </td>
          </tr>
          <tr>
            <td class="subj" …>
              <a href="…" title="General subject">gener.</a>
            </td>
            <td class="trans" …>
              <a href="…">компьютер</a> <span …>(all need&nbsp;<i><a href="…">Буткова</a></i>)</span>;
              <a href="…">вычислитель</a>;
              <a href="…">счётчик</a> <span …>(прибора)</span>;
              <a href="…">кибермашина</a>
            </td>
          </tr>
          <tr>
            <td class="subj" …>…</td>
            <td class="trans" …>…</td>
          </tr>
          …
          <tr>
            <td … class="gray">…</td>
          </tr>
          <tr>
            <td class="subj" …>…</td>
            <td class="trans" …>…</td>
          </tr>
        </table>
        …
*/

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
