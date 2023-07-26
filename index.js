const bcrypt = require('bcrypt');
const saltRounds = 14;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    console.log(hash);
});

const hash = '$2b$14$cJSUBMfmnaoqkTlKmdwTtuHw5agJEf5B3N6b0BKlFmS9BovyE8xz.';
bcrypt.compare(myPlaintextPassword, hash, function (err, res) {
    console.log(res);
});