module.exports = {
  '*.{js,jsx,ts,tsx,json,md}': ['yarn format'],
  'src/**/*.{ts,tsx}': ['yarn lint:fix']
};
