const fs = require('fs').promises;

const text = 'This is some text to store in a file!';

// To execute: `node app.js`
fs.writeFile('node-message.txt', text).then(() => {
  console.log('Wrote file!');
});
