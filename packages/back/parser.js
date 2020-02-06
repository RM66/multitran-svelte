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

/**
 * @returns [[{ type: 'head' | 'subj' | 'tran', text: string }, … ], [ … ]]
 */
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
        const lastItem = result.length ? result[result.length - 1] : [];
        const lastBlock = lastItem.length ? lastItem[lastItem.length - 1] : {};
        if (lastBlock.type === currentTd) {
          lastBlock.text.push(text);
        } else {
          const block = {
            type: currentTd,
            text: [text]
          };
          if (currentTd == 'head') {
            result.push([block]);
          } else {
            lastItem.push(block);
          }
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

  parser.write(html);
  parser.end();

  return JSON.stringify(result);
};

module.exports = parseMtr;
