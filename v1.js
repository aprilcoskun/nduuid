const crypto = require('crypto');
const convert = require('./convert');

let id;
let _clockseq;

let prevMSecs = 0;
let prevNSecs = 0;

// Inspired by https://github.com/kelektiv/node-uuid

/**
 * @returns {String} uuid v1 without dashes 
 */
function v1() {
  let i = 0;
  let r = [];

  let node = id;
  let clockseq = _clockseq;

  if (node == null || clockseq == null) {
    let seeds = crypto.randomBytes(16);
    if (node == null)
      node = id = [
        seeds[0] | 0x01,
        seeds[1],
        seeds[2],
        seeds[3],
        seeds[4],
        seeds[5]
      ];
    if (clockseq == null)
      clockseq = _clockseq = ((seeds[6] << 8) | seeds[7]) & 0x3fff;
  }

  let mSecs = new Date().getTime();

  let nSecs = prevNSecs + 1;

  let dt = mSecs - prevMSecs + (nSecs - prevNSecs) / 10000;

  if (dt < 0) clockseq = (clockseq + 1) & 0x3fff;

  if (dt < 0 || mSecs > prevMSecs) nSecs = 0;
  prevMSecs = mSecs;
  prevNSecs = nSecs;
  _clockseq = clockseq;

  mSecs += 12219292800000;

  let tl = ((mSecs & 0xfffffff) * 10000 + nSecs) % 0x100000000;
  r[i++] = (tl >>> 24) & 0xff;
  r[i++] = (tl >>> 16) & 0xff;
  r[i++] = (tl >>> 8) & 0xff;
  r[i++] = tl & 0xff;

  let tmh = (mSecs / 0x100000000 * 10000) & 0xfffffff;
  r[i++] = (tmh >>> 8) & 0xff;
  r[i++] = tmh & 0xff;

  r[i++] = ((tmh >>> 24) & 0xf) | 0x10;
  r[i++] = (tmh >>> 16) & 0xff;

  r[i++] = (clockseq >>> 8) | 0x80;

  r[i++] = clockseq & 0xff;

  for (let n = 0; n < 6; ++n) r[i + n] = node[n];

  return convert(r);
}

module.exports = v1;
