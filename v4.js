const { randomBytes } = require('crypto');
const hexBytes = require('./hexBytes');
// Inspired by https://github.com/kelektiv/node-uuid

/**
 * @returns {String} uuid v4 without dashes 
 */
function v4() {
  const r = randomBytes(16);
  return (
    hexBytes[r[0]] +
    hexBytes[r[1]] +
    hexBytes[r[2]] +
    hexBytes[r[3]] +
    hexBytes[r[4]] +
    hexBytes[r[5]] +
    hexBytes[(r[6] & 0x0f) | 0x40] +
    hexBytes[r[7]] +
    hexBytes[(r[8] & 0x3f) | 0x80] +
    hexBytes[r[9]] +
    hexBytes[r[10]] +
    hexBytes[r[11]] +
    hexBytes[r[12]] +
    hexBytes[r[13]] +
    hexBytes[r[14]] +
    hexBytes[r[15]]
  );
}

module.exports = v4;
