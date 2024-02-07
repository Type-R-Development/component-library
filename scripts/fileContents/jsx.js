import casing from '../helpers/casing.js';
export default function jsx(name) {
  return `import React from 'react';
import PropTypes from 'prop-types';
import './${casing.pascal(name)}.scss';

export default function ${casing.pascal(name)}() {
  return <div className="${casing.kebab(name)}-Container">${casing.pascal(name)} WORKS</div>;
}
${casing.pascal(name)}.propTypes = {};
`;
}
