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
const GlobeHemisphereEast = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-hemisphere-east-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 8a91.48 91.48 0 0 1 52 16.15V74a4 4 0 0 1-1 2.61l-22.17 25.76a4 4 0 0 1-2.49 1.35L122.9 108a3.94 3.94 0 0 1-2.88-.72l-.16-.11-19.73-12.95a12 12 0 0 0-16.93 3.11l-21 31.3a11.93 11.93 0 0 0-2 6.6l-.2 36.23a4 4 0 0 1-1.8 3.33l-6.65 4.36A92 92 0 0 1 128 36ZM56.32 185.6l6.29-4.13a12 12 0 0 0 5.41-10l.21-36.23a4 4 0 0 1 .67-2.2l20.95-31.3a4 4 0 0 1 5.67-1l.15.11 19.74 12.91a12 12 0 0 0 8.56 2.11l31.47-4.26a12 12 0 0 0 7.49-4.06l22.17-25.74A12 12 0 0 0 188 74V58.31A91.91 91.91 0 0 1 213.5 162l-20.57-18.82a12 12 0 0 0-12.7-2.22l-30.45 12.66a12.06 12.06 0 0 0-7.27 9.33l-2.38 16.19a12 12 0 0 0 8.87 13.32l21.45 5.63a4 4 0 0 1 1.82 1l5.94 6A91.85 91.85 0 0 1 56.32 185.6Zm128.43 14.76-6.86-6.88a12 12 0 0 0-5.45-3.13L151 184.72a4 4 0 0 1-3-4.45l2.39-16.2a4 4 0 0 1 2.42-3.11l30.45-12.65a4 4 0 0 1 4.24.74l22.5 20.57a92.43 92.43 0 0 1-25.25 30.74Z"
}));
var _default = exports.default = GlobeHemisphereEast;