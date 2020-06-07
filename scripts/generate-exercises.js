let process = require('process');
let fs = require('fs');
let toml = require('toml');
let path = require('path');

let Handlebars = require('handlebars');

async function readFile(filename) {
  return fs.promises.readFile(filename, 'utf8');
}

async function parseTomlFile(filename) {
  let fileContents = await readFile(filename, 'utf8');
  return toml.parse(fileContents);
}

async function compileTemplate(templateFilename) {
  return Handlebars.compile(await readFile(templateFilename));
}

async function main(templateDir, exerciseDataFilename) {
  let templates = await getTemplates(templateDir);
  let templateData = await parseTomlFile(exerciseDataFilename);

  for (let exercise of templateData.exercises) {
    let exerciseDir = path.join('exercises', exercise.slug);

    await fs.promises.mkdir(exerciseDir, { recursive: true });

    for (let [filename, template] of templates) {
      let fullPath = path.join(exerciseDir, filename);

      await fs.promises.writeFile(fullPath, template(exercise), 'utf8');
    }
  }
}

async function getTemplates(templateDir) {
  let templateFiles = await getTemplateFiles(templateDir);

  return templateFiles.reduce(async(promise, filename) => {
    let map = await promise;
    let templateFilename = path.join(templateDir, filename);
    let template = await compileTemplate(templateFilename);

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
  console.error('Usage: node generate-exercises.js <template> <exercises>');
  process.exit(1);
}

let templateDir = process.argv[2];
let exerciseDataFilename = process.argv[3];

main(templateDir, exerciseDataFilename);
