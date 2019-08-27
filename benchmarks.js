const { v1, v4 } = require('./');
const { v1: uuidv1, v4: uuidv4 } = require('uuid');

console.time('node-uuid: creating 1.000.000 uuid v1');
for (let i = 0; i < 1000000; i++) {
  uuidv1();
}
console.timeEnd('node-uuid: creating 1.000.000 uuid v1');

console.time('nduuid: creating 1.000.000 uuid v1');
for (let j = 0; j < 1000000; j++) {
  v1();
}
console.timeEnd('nduuid: creating 1.000.000 uuid v1');

console.time('node-uuid: creating 1.000.000 uuid v4');
for (let i = 0; i < 1000000; i++) {
  uuidv4();
}
console.timeEnd('node-uuid: creating 1.000.000 uuid v4');

console.time('nduuid: creating 1.000.000 uuid v4');
for (let j = 0; j < 1000000; j++) {
  v4();
}
console.timeEnd('nduuid: creating 1.000.000 uuid v4');
