import { merge as _merge } from 'lodash';
/**
 * Recursively merges own and inherited enumerable string keyed properties of
 * source objects into the destination object. Source properties that resolve
 * to undefined are skipped if a destination value exists. Array and plain
 * object properties are merged recursively. Other objects and value types are
 * overridden by assignment. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * @param {Object} obj the base object to merge into
 * @param  {...Object} sources objects we want to merge with the main obj
 * @returns {Object}
 */
export const merge = _merge;
