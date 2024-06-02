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
const NyTimesLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ny-times-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 148a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-4-40a11.84 11.84 0 0 1-5.07-1.13l-64.68-30.18a68 68 0 0 0-57.83 59.89l65.93-35.17A12 12 0 0 1 144 112v98.11a67.71 67.71 0 0 0 44.75-35.52 12 12 0 1 1 21.42 10.82 91.54 91.54 0 0 1-76 50.38 12.13 12.13 0 0 1-2.17.21c-.35 0-.68 0-1-.05-1 0-2 .05-3 .05a92 92 0 0 1-81.64-134.39A40 40 0 0 1 68 28a11.84 11.84 0 0 1 5.07 1.13l117.24 54.7A16 16 0 0 0 188 52a12 12 0 0 1 0-24 40 40 0 0 1 0 80ZM80 192.12v-38.79l-17.39 9.28A68.13 68.13 0 0 0 80 192.12ZM120 132l-16 8.53v67.08a67.1 67.1 0 0 0 16 3.9ZM86.5 61.88l-20.81-9.71a16 16 0 0 0-5.58 29.74A92 92 0 0 1 86.5 61.88Z"
}));
var _default = exports.default = NyTimesLogo;