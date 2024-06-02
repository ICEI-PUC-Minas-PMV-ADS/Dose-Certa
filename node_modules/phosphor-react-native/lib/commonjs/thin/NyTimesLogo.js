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
  className: "ny-times-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 140a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm14.31-40.38-66.74-31.14A76 76 0 0 0 52 144c0 1.32 0 2.64.1 3.95l74-39.48A4 4 0 0 1 132 112v107.88a75.64 75.64 0 0 0 68.52-53.08 4 4 0 1 1 7.63 2.4A84 84 0 1 1 57.57 98.25 32 32 0 0 1 68 36a4 4 0 0 1 1.69.38L188.85 92a24 24 0 0 0-.85-48 4 4 0 0 1 0-8 32 32 0 0 1 0 64 4 4 0 0 1-1.69-.38Zm-62.31 19-24 12.8v83.16a75.45 75.45 0 0 0 24 5.26Zm-70.95 37.89a76.15 76.15 0 0 0 39 54.4v-75.18Zm54-93.86L67.15 44a24 24 0 0 0-4.6 47.36c1.1-1.37 2.22-2.71 3.41-4a83.89 83.89 0 0 1 41.12-24.71Z"
}));
var _default = exports.default = NyTimesLogo;