import inquirer from 'inquirer';
import * as fs from 'fs';
import print from './helpers/print.js';
import storybook from './fileContents/storybook.js';
import sass from './fileContents/sass.js';
import jsx from './fileContents/jsx.js';
import casing from './helpers/casing.js';

inquirer
  .prompt([
    {
      type: 'list',
      name: 'componentType',
      message: 'What type of component are you creating?',
      choices: ['Base', 'Component', 'Layout', 'Page', 'Template'],
    },
    {
      type: 'input',
      name: 'componentName',
      message: 'What is the name of the component? (Human readable name)',
    },
  ])
  .then((answers) => {
    const { componentName, componentType } = answers;
    let valid = true;
    if (!fs.existsSync(`src/components/${componentType}`)) {
      fs.mkdirSync(`src/components/${componentType}`);
      print.green(`${componentType} directory created`);
    }
    if (
      fs.existsSync(
        `src/components/${componentType}/${casing.pascal(componentName)}/${casing.pascal(componentName)}.jsx`,
      )
    ) {
      console.error(
        `${casing.pascal(componentName)}'s jsx file already exists`,
      );
      valid = false;
    }
    if (
      fs.existsSync(
        `src/components/${componentType}/${casing.pascal(componentName)}/${casing.pascal(componentName)}.scss`,
      )
    ) {
      console.error(
        `${casing.pascal(componentName)}'s style sheet already exists`,
      );
      valid = false;
    }
    if (
      fs.existsSync(
        `src/components/${componentType}/${casing.pascal(componentName)}/${casing.pascal(componentName)}.spec.js`,
      )
    ) {
      console.error(
        `${casing.pascal(casing.pascal(componentName))}'s test file already exists`,
      );
      valid = false;
    }
    if (
      fs.existsSync(
        `src/components/${componentType}/${casing.pascal(componentName)}/${casing.pascal(componentName)}.stories.js`,
      )
    ) {
      console.error(
        `${casing.pascal(componentName)}'s story file already exists`,
      );
      valid = false;
    }
    if (valid) {
      fs.mkdirSync(
        `src/components/${componentType}/${casing.pascal(componentName)}`,
      );
      fs.writeFileSync(
        `src/components/${componentType}/${casing.pascal(componentName)}/${casing.pascal(componentName)}.jsx`,
        jsx(componentName, componentType),
        function (err) {
          if (err) throw err;
          print.green(`${casing.pascal(componentName)}.jsx created`);
        },
      );
      fs.writeFileSync(
        `src/components/${componentType}/${casing.pascal(componentName)}/${casing.pascal(componentName)}.scss`,
        sass(componentName),
        function (err) {
          if (err) throw err;
          print.green(`${casing.pascal(componentName)}.scss created`);
        },
      );
      fs.writeFileSync(
        `src/components/${componentType}/${casing.pascal(componentName)}/${casing.pascal(componentName)}.spec.js`,
        '',
        function (err) {
          if (err) throw err;
          print.green(`${casing.pascal(componentName)}.spec.js created`);
        },
      );
      fs.writeFileSync(
        `src/components/${componentType}/${casing.pascal(componentName)}/${casing.pascal(componentName)}.stories.js`,
        storybook(componentName, componentType),
        function (err) {
          if (err) throw err;
          print.green(`${casing.pascal(componentName)}.stories.js created`);
        },
      );
    }
  });
