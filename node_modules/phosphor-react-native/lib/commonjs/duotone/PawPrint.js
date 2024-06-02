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
const PawPrint = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paw-print-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 108a20 20 0 1 1-20-20 20 20 0 0 1 20 20Zm-168 0a20 20 0 1 0-20 20 20 20 0 0 0 20-20Zm28-28a20 20 0 1 0-20-20 20 20 0 0 0 20 20Zm72 0a20 20 0 1 0-20-20 20 20 0 0 0 20 20Zm19.24 75.85A43.46 43.46 0 0 1 162.57 130a36 36 0 0 0-69.14 0 43.49 43.49 0 0 1-20.67 25.9 32 32 0 0 0 27.73 57.62 72.49 72.49 0 0 1 55 0 32 32 0 0 0 27.73-57.62Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M212 80a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12ZM72 108a28 28 0 1 0-28 28 28 28 0 0 0 28-28Zm-28 12a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm48-32a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm72 40a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm23.12 100.86a35.3 35.3 0 0 1-16.87-21.14 44 44 0 0 0-84.5 0A35.25 35.25 0 0 1 69 148.82 40 40 0 0 0 88 224a39.48 39.48 0 0 0 15.52-3.13 64.09 64.09 0 0 1 48.87 0 40 40 0 0 0 34.73-72ZM168 208a24 24 0 0 1-9.45-1.93 80.14 80.14 0 0 0-61.19 0 24 24 0 0 1-20.71-43.26 51.22 51.22 0 0 0 24.46-30.67 28 28 0 0 1 53.78 0 51.27 51.27 0 0 0 24.53 30.71A24 24 0 0 1 168 208Z"
}));
var _default = exports.default = PawPrint;