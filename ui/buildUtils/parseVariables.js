const fs = require('fs');

const parseVariables = file => {
  const data = fs.readFileSync(file, 'utf8');
  const re = /--(.*): (.*);/g;
  let loop = true;
  const variables = {};

  while (loop) {
    const match = re.exec(data);
    if (match) {
      const [, key, value] = match;
      variables[key] = value;
    } else {
      loop = false;
    }
  }

  return variables;
};

module.exports = parseVariables;
