/**
 * Converts all object keys to lower case versions for case insensitive
 * operations like header checking
 *
 * @param {Object} obj
 * @returns {Object}
 */
export const downcaseKeys = (obj) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key.toLowerCase()] = value;
    return acc;
  }, {});
