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
const PaintBrush = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paint-brush-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 28c-20.29 0-43.16 11.24-68 33.4-18.47 16.49-34.39 35.83-45 49.93A56 56 0 0 0 36 164c0 33.22-21.26 48-22.22 48.68A4 4 0 0 0 16 220h76a56 56 0 0 0 52.67-75c14.11-10.63 33.44-26.55 49.93-45C216.76 75.16 228 52.29 228 32a4 4 0 0 0-4-4ZM92 212H26.35C33.91 203.69 44 188.08 44 164a48 48 0 1 1 48 48Zm26.52-97.31c4.13-5.44 9.32-12 15.29-18.9a80.08 80.08 0 0 1 26.4 26.4c-6.94 6-13.46 11.16-18.9 15.29a56.32 56.32 0 0 0-22.79-22.79Zm47.77 2.14a88.17 88.17 0 0 0-27.12-27.12c21.83-24.28 52.09-51.08 80.65-53.53-2.45 28.56-29.25 58.82-53.53 80.65Z"
}));
var _default = exports.default = PaintBrush;