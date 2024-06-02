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
const Fingerprint = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fingerprint-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M70 128a132.68 132.68 0 0 1-14 59.58 6 6 0 0 1-5.38 3.33 6 6 0 0 1-5.36-8.67A120.74 120.74 0 0 0 58 128a69.72 69.72 0 0 1 26.25-54.64 6 6 0 0 1 7.51 9.37A57.73 57.73 0 0 0 70 128Zm58-6a6 6 0 0 0-6 6 186.07 186.07 0 0 1-23.23 90.07 6 6 0 0 0 10.5 5.82A198.14 198.14 0 0 0 134 128a6 6 0 0 0-6-6Zm0-32a38 38 0 0 0-38 38 6 6 0 0 0 12 0 26 26 0 0 1 52 0 216.06 216.06 0 0 1-20.71 92.85 6 6 0 1 0 10.87 5.15A227.94 227.94 0 0 0 166 128a38 38 0 0 0-38-38Zm0-64A102.11 102.11 0 0 0 26 128a90 90 0 0 1-5.12 30 6 6 0 1 0 11.31 4A101.83 101.83 0 0 0 38 128a90 90 0 0 1 180 0 284.7 284.7 0 0 1-5.33 54.84 6 6 0 0 0 4.72 7.05 6.8 6.8 0 0 0 1.17.11 6 6 0 0 0 5.88-4.84A295.92 295.92 0 0 0 230 128 102.12 102.12 0 0 0 128 26ZM94 154.13a6 6 0 0 0-7.07 4.69 152.82 152.82 0 0 1-17.44 46 6 6 0 0 0 10.4 6 164.77 164.77 0 0 0 18.8-49.65 6 6 0 0 0-4.69-7.04ZM128 58a70.76 70.76 0 0 0-8.75.54 6 6 0 1 0 1.49 11.91A58 58 0 0 1 186 128a252.27 252.27 0 0 1-1.94 31.26 6 6 0 0 0 5.21 6.69 6.59 6.59 0 0 0 .75 0 6 6 0 0 0 5.95-5.26A266.46 266.46 0 0 0 198 128a70.08 70.08 0 0 0-70-70Zm57.44 128.2a6 6 0 0 0-7.31 4.31c-1.47 5.74-3.18 11.49-5.06 17.09a6 6 0 0 0 11.38 3.82c2-5.88 3.75-11.9 5.3-17.92a6 6 0 0 0-4.31-7.3Z"
}));
var _default = exports.default = Fingerprint;