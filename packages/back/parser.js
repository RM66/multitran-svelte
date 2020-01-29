const htmlparser2 = require('htmlparser2');

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

const tdTypes = {
  gray: 'head',
  subj: 'subj',
  trans: 'tran'
};

const parseMtr = function(html) {
  let beforeTarget, inTargetTable;
  let currentTd;
  const result = [];

  const parser = new htmlparser2.Parser({
    onopentag(name, attrs) {
      if (name === 'form' && attrs.id === 'translation') beforeTarget = true;
      else if (name === 'table' && beforeTarget) {
        beforeTarget = false;
        inTargetTable = true;
      } else if (inTargetTable && name === 'td') {
        currentTd = tdTypes[attrs.class];
      }
    },
    ontext(text) {
      if (inTargetTable && currentTd) {
        const last = result.length ? result[result.length - 1] : {};
        if (last.type === currentTd) {
          last.text.push(text);
        } else {
          result.push({
            type: currentTd,
            text: [text]
          });
        }
      }
    },
    onclosetag(name) {
      if (inTargetTable) {
        if (name === 'table') inTargetTable = false;
        else if (name === 'td') currentTd = null;
      }
    }
  });

  console.time();
  parser.write(html);
  parser.end();
  console.timeEnd();

  return JSON.stringify(result);
};

module.exports = parseMtr;
