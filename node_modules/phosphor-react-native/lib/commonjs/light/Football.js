"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* GENERATED FILE */
const Football = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "football-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227.09 54.22a30.92 30.92 0 0 0-25.31-25.31c-32-5.42-92.28-7.91-136.53 36.34S23.49 169.78 28.91 201.78a30.92 30.92 0 0 0 25.31 25.31 205 205 0 0 0 34 2.91c31.69 0 71.12-7.88 102.49-39.25C235 146.5 232.51 86.22 227.09 54.22ZM167.44 37.9a194 194 0 0 1 32.33 2.83 18.93 18.93 0 0 1 15.5 15.5 187 187 0 0 1 2.6 41.21l-59.31-59.3c2.89-.14 5.84-.24 8.88-.24ZM56.23 215.27a18.93 18.93 0 0 1-15.5-15.5 187 187 0 0 1-2.6-41.21l59.31 59.31a187 187 0 0 1-41.21-2.6Zm126-33c-11.92 11.91-34.24 28.54-69.46 34l-73.05-73.08c5.47-35.22 22.1-57.54 34-69.46s34.28-28.53 69.48-34l73.08 73.08c-5.47 35.19-22.1 57.54-34.01 69.46Zm-18.01-90.49a6 6 0 0 1 0 8.48L148.48 116l7.75 7.75a6 6 0 1 1-8.48 8.48l-7.75-7.74L124.49 140l7.75 7.76a6 6 0 1 1-8.48 8.48l-7.76-7.76-15.75 15.74a6 6 0 1 1-8.48-8.48L107.52 140l-7.75-7.75a6 6 0 1 1 8.48-8.48l7.76 7.75 15.5-15.5-7.75-7.76a6 6 0 1 1 8.48-8.48l7.75 7.75 15.75-15.74a6 6 0 0 1 8.48-.01Z"
}));
var _default = exports.default = Football;