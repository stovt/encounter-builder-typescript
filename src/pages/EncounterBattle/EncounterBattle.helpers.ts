export const getInitiative = (dex: number) =>
  Math.floor(Math.floor(Math.random() * 20) + 1 + (dex - 10) / 2);
