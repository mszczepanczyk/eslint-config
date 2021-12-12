'use strict';

// https://github.com/fatfisz/eslint-config-fatfisz/blob/master/isPackageInstalled.js

exports.isPackageInstalled = function isPackageInstalled(name) {
  try {
    require.resolve(name);
    return true;
  } catch {
    return false;
  }
};
