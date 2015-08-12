'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ycomb = require('ycomb');

var _ycomb2 = _interopRequireDefault(_ycomb);

exports['default'] = (0, _ycomb2['default'])(function (f) {
  return function (g, i) {
    var r = g(i - 1);
    return r !== false ? r : f(g, i - 1);
  };
});
module.exports = exports['default'];