module.exports = {
  'src/**/*.{ts,tsx}': ['prettier --write', 'yarn lint:fix', 'git add']
};
