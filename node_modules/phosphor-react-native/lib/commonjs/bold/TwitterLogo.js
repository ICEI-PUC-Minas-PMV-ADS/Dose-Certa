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
const TwitterLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "twitter-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M251.09 67.41A12 12 0 0 0 240 60h-28.18a52.73 52.73 0 0 0-43.67-24 50.85 50.85 0 0 0-36.6 14.85A51.87 51.87 0 0 0 116 88v.78c-36.83-11.57-66.38-40.9-66.7-41.23a12 12 0 0 0-20.47 7.38c-6.31 70.17 24.65 107.79 42.06 123.12C56.4 192.83 36 200.68 35.8 200.76a12 12 0 0 0-5.8 17.9C32 221.55 43.44 236 80 236c72.25 0 132.7-55.26 139.6-126.63l28.88-28.88a12 12 0 0 0 2.61-13.08Zm-51.57 28.11a11.93 11.93 0 0 0-3.49 7.72C192.14 164.23 141.18 212 80 212a90.78 90.78 0 0 1-12.49-.79C78 204.55 89.72 195.07 98 182.66a12 12 0 0 0-3.9-17c-.12-.07-12.33-7.49-23.43-24.42s-17.26-37-18.46-59.78C69.37 94.4 96 110.79 126 115.84A12 12 0 0 0 140 104V88a28 28 0 0 1 8.41-20.07A27.07 27.07 0 0 1 167.86 60a28.83 28.83 0 0 1 25.82 16.81 12 12 0 0 0 11 7.19H211Z"
}));
var _default = exports.default = TwitterLogo;