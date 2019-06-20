const process = require('process');
const fs = require('fs');
const toml = require('toml');

const Handlebars = require('handlebars');

async function readFile(filename) {
  return await fs.promises.readFile(filename, 'utf8');
}

async function parseTomlFile(filename) {
  const fileContents = await readFile(filename, 'utf8');
  return toml.parse(fileContents);
}

async function compileTemplate(templateFilename) {
  return Handlebars.compile(await readFile(templateFilename));
}

async function main(templateFilename, exerciseDataFilename) {
  const template = await compileTemplate(templateFilename);
  const templateData = await parseTomlFile(exerciseDataFilename);

  for(let exercise of templateData['exercises']) {
    console.log(template(exercise));
  }
}

if (process.argv.length < 4) {
  console.error('Missing exercises data and/or template filename.');
  console.error('Usage: node generate-exercises.js <template> <exercises>')
  process.exit(1);
}

const templateFilename = process.argv[2];
const exerciseDataFilename = process.argv[3];

main(templateFilename, exerciseDataFilename);
