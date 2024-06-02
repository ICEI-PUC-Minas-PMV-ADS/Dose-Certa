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
const Unite = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "unite-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M171.17 84.83a76 76 0 1 0-86.34 86.34 76 76 0 1 0 86.34-86.34ZM228 160a68.63 68.63 0 0 1-1.27 13.07l-57.34-57.34A76 76 0 0 0 172 96c0-1 0-2-.07-2.93A68.1 68.1 0 0 1 228 160ZM45.2 50.86l58.34 58.33a76.35 76.35 0 0 0-14.09 22.6L31.67 74A68.14 68.14 0 0 1 45.2 50.86ZM74 31.67l57.78 57.78a76.35 76.35 0 0 0-22.6 14.09L50.86 45.2A68.14 68.14 0 0 1 74 31.67ZM164 96a67.59 67.59 0 0 1-7.45 30.89l-27.44-27.44A67.59 67.59 0 0 1 160 92c1.3 0 2.6 0 3.88.12.12 1.28.12 2.58.12 3.88Zm-30 56.36L103.64 122A68.74 68.74 0 0 1 122 103.64L152.36 134A68.74 68.74 0 0 1 134 152.36ZM92 160a67.59 67.59 0 0 1 7.45-30.89l27.44 27.44A67.59 67.59 0 0 1 96 164c-1.3 0-2.6-.05-3.88-.12-.07-1.28-.12-2.58-.12-3.88Zm54.81-7.54 58.33 58.34A68.14 68.14 0 0 1 182 224.33l-57.78-57.78a76.35 76.35 0 0 0 22.59-14.09Zm5.65-5.65a76.35 76.35 0 0 0 14.09-22.6L224.33 182a68.14 68.14 0 0 1-13.53 23.15Zm10.47-62.74c-1 0-2-.07-2.93-.07a76 76 0 0 0-19.73 2.61L82.93 29.27a68 68 0 0 1 80 54.8ZM28 96a68.63 68.63 0 0 1 1.27-13.07l57.34 57.34A76 76 0 0 0 84 160c0 1 0 2 .07 2.93A68.1 68.1 0 0 1 28 96Zm65.07 75.93c1 0 2 .07 2.93.07a76 76 0 0 0 19.73-2.61l57.34 57.34a68 68 0 0 1-80-54.8Z"
}));
var _default = exports.default = Unite;