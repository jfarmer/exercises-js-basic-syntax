const process = require('process');
const fs = require('fs');
const toml = require('toml');
const path = require('path');

const Handlebars = require('handlebars');

async function readFile(filename) {
  return fs.promises.readFile(filename, 'utf8');
}

async function parseTomlFile(filename) {
  const fileContents = await readFile(filename, 'utf8');
  return toml.parse(fileContents);
}

async function compileTemplate(templateFilename) {
  return Handlebars.compile(await readFile(templateFilename));
}

async function main(templateDir, exerciseDataFilename) {
  const templates = await getTemplates(templateDir);
  const templateData = await parseTomlFile(exerciseDataFilename);

  for(let exercise of templateData['exercises']) {
    const exerciseDir = path.join('exercises', exercise['slug']);

    await fs.promises.mkdir(exerciseDir, { recursive: true });

    for(let [filename, template] of templates) {
      const fullPath = path.join(exerciseDir, filename);

      await fs.promises.writeFile(fullPath, template(exercise), 'utf8');
    }
  }
}

async function getTemplates(templateDir) {
  const templateFiles = await getTemplateFiles(templateDir);

  return templateFiles.reduce(async (promise, filename) => {
    const map = await promise;
    const templateFilename = path.join(templateDir, filename);
    const template = await compileTemplate(templateFilename);

    return map.set(templateBasename(templateFilename), template);
  }, Promise.resolve(new Map()));
}

async function getTemplateFiles(templateDir) {
  return fs.promises.readdir(templateDir);
}

function templateBasename(templateFilename) {
  return path.basename(templateFilename, '.hbs');
}

if (process.argv.length < 4) {
  console.error('Missing exercises data and/or template directory.');
  console.error('Usage: node generate-exercises.js <template> <exercises>')
  process.exit(1);
}

const templateDir = process.argv[2];
const exerciseDataFilename = process.argv[3];

main(templateDir, exerciseDataFilename);
