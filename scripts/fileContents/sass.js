import casing from '../helpers/casing.js';
export default function sass(name) {
  return `.${casing.kebab(name)}-Container {
}
`;
}
