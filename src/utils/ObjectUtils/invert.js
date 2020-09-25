/**
 * Takes an object and inverts the keys and values, e.g. { a: 1, b: 2}
 * would become { 1: a, 2: b }
 * @param {Object} obj
 * @returns {Object}
 */
export const invert = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
};
