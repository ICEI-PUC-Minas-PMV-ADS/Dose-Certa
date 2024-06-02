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
const Carrot = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "carrot-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 68h-38.34l33.17-33.17a4 4 0 1 0-5.66-5.66L188 62.34V24a4 4 0 0 0-8 0v40a60 60 0 0 0-78.39 5.54c-17.12 16.79-34.51 45.72-51.7 86-11.93 28-19.61 52-20.59 55.09A12.05 12.05 0 0 0 40 228a12 12 0 0 0 5.36-1.28c3.12-1 27.13-8.65 55.09-20.59 40.29-17.2 69.24-34.61 86-51.71A60 60 0 0 0 192 76h40a4 4 0 0 0 0-8Zm-51.26 80.79c-9.76 10-23.42 19.39-38.37 27.91l-27.54-27.53a4 4 0 0 0-5.65 5.65l25.9 25.91C92.61 203.55 43.34 219 42.64 219.18a4.45 4.45 0 0 0-.71.3 4 4 0 0 1-5.41-5.41 4.45 4.45 0 0 0 .3-.71c.29-1 29.72-95 67.62-135.27l36.74 36.73a4 4 0 0 0 5.65 0 4 4 0 0 0 0-5.65l-36.65-36.65a52 52 0 0 1 70.56 76.27Z"
}));
var _default = exports.default = Carrot;