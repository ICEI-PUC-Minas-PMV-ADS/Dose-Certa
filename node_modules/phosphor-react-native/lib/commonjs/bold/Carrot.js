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
  className: "carrot-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 60h-19l19.51-19.51a12 12 0 1 0-17-17L196 43V24a12 12 0 0 0-24 0v26a68 68 0 0 0-76 13.87C55.45 103.68 25.18 197 21.78 207.77A20 20 0 0 0 40 236a20.12 20.12 0 0 0 8.24-1.78c7.64-2.42 56.79-18.34 98.91-41.82l.54-.3c17.1-9.57 33-20.39 44.44-32A68 68 0 0 0 206 84h26a12 12 0 0 0 0-24Zm-56.89 83.12-.09.09c-8.11 8.28-19.11 16.2-31.33 23.52l-23.21-23.21a12 12 0 1 0-17 17l18.22 18.22c-30.29 15.17-62.13 26.42-75.26 30.82 6.77-20.22 29.79-84.8 58.34-119.74l30.7 30.7a12 12 0 1 0 17-17l-29.94-29.94a44 44 0 0 1 52.57 69.54Z"
}));
var _default = exports.default = Carrot;