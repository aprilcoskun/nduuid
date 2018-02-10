const crypto = require('crypto');
const convert = require('./convert');

// Inspired by https://github.com/kelektiv/node-uuid

/**
 * @returns {String} uuid v4 without dashes 
 */
function v4() {
  let i = 0;
  let r = crypto.randomBytes(16);
  let h = [];

  for (let i = 0; i < 256; ++i) h[i] = (i + 0x100).toString(16).substr(1);

  r[6] = (r[6] & 0x0f) | 0x40;
  r[8] = (r[8] & 0x3f) | 0x80;

  return convert(r);
}

module.exports = v4;
