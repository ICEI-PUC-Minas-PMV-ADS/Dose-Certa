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
  className: "twitter-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M243.7 70.47A4 4 0 0 0 240 68h-32.8a44.57 44.57 0 0 0-39.15-24 42.76 42.76 0 0 0-30.88 12.55A43.85 43.85 0 0 0 124 88v11.16c-43.65-9.39-80-45.6-80.39-46a4 4 0 0 0-4.19-.95 4 4 0 0 0-2.63 3.41c-4.2 46.62 9.27 77.71 21.31 95.59A103.68 103.68 0 0 0 82.35 177c-15.68 20.49-43.46 31.13-43.75 31.24a4 4 0 0 0-1.93 6c.27.4 2.79 4 9.54 7.36C54.73 225.84 66.1 228 80 228c69.09 0 126.73-53.56 131.89-122.23l30.94-30.94a4 4 0 0 0 .87-4.36Zm-38.53 30.7a4 4 0 0 0-1.16 2.58C199.85 168.94 145.38 220 80 220c-17.85 0-27.63-3.89-32.5-6.87 10.37-4.82 31.45-16.34 43.83-34.91a4 4 0 0 0 .56-3.12 3.93 3.93 0 0 0-1.89-2.55c-.13-.08-13.39-8-25.52-26.15C54 130.71 42.39 104.11 44.19 64.65c13.17 11.62 45.48 37 83.15 43.3a4 4 0 0 0 4.66-4V88a36 36 0 0 1 10.79-25.76A35 35 0 0 1 168 52c14.2.18 27.49 8.86 33.06 21.61a4 4 0 0 0 3.61 2.39h25.67Z"
}));
var _default = exports.default = TwitterLogo;