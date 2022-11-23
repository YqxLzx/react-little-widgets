'use strict';

function main () {
    Promise.resolve().then(function () { return require('./foo-b47ac6ef.js'); }).then(({ default: foo }) => console.log(foo));
  }

module.exports = main;
