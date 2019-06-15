const process = require('process');
const fs = require('fs');
const toml = require('toml');


if (process.argv.length < 3) {
  console.error('Missing exercises data filename.');
  process.exit(1);
}

const exerciseDataFilename = process.argv[1];

fs.read(exerciseDataFilename, 'utf8', (err, contents) => {

});
