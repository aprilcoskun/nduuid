var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

module.exports = (buf) => {
  let i = 0;
  let bth = byteToHex;
  return (
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]] +
    bth[buf[i++]]
  );
}