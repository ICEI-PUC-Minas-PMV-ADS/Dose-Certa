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
const Confetti = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "confetti-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M114.32 49.8a19.79 19.79 0 0 0-32.6 7.2l-52.5 144.41A19.82 19.82 0 0 0 47.75 228a20 20 0 0 0 6.84-1.22L199 174.28a19.79 19.79 0 0 0 7.24-32.6Zm-10.13 133.41-31.4-31.4 10.15-27.91 49.16 49.16Zm-52.42 26.4Zm12-32.91 15.53 15.56-24.45 8.89ZM157 164 92 99l10-27.58L184.57 154ZM128 40V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0Zm116.48 83.51a12 12 0 0 1-17 17l-16-16a12 12 0 0 1 17-17Zm-.69-40.13-24 8a12 12 0 0 1-7.59-22.77l24-8a12 12 0 1 1 7.59 22.77ZM156.6 65.93C159.83 47.47 173.39 36 192 36c6.45 0 8.69-2.49 10-4.92a18 18 0 0 0 2-7.22V24a12 12 0 0 1 24 0c0 14.47-9.59 36-36 36-4.94 0-10.21 1.19-11.76 10.06A12 12 0 0 1 168.43 80a12.35 12.35 0 0 1-2.08-.18 12 12 0 0 1-9.75-13.89Z"
}));
var _default = exports.default = Confetti;