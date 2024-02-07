import casing from '../helpers/casing.js';
export default function storybook(name, type) {
  return `import ${casing.pascal(name)} from './${casing.pascal(name)}.jsx';
export default {
  title: '${type}/${casing.pascal(name)}',
  component: ${casing.pascal(name)},
  argTypes: {},
};

export const Default = {
  args: {},
};
`;
}
