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
const AirplaneTakeoff = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "airplane-takeoff__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 216a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8Zm71.86-122.85a8 8 0 0 1-3.76 5.39l-147.41 88a40.18 40.18 0 0 1-20.26 5.52 39.78 39.78 0 0 1-27.28-10.87l-.12-.12L13 145.8a16 16 0 0 1 4.49-26.21l3-1.47a8 8 0 0 1 6.08-.4l28.26 9.54L75 115.06 53.17 93.87A16 16 0 0 1 57.7 67.4l.32-.13 7.15-2.71a8 8 0 0 1 5.59 0l53.94 19.82 51.57-30.78a39.82 39.82 0 0 1 51.28 9.12l.12.15 18.64 23.89a8 8 0 0 1 1.55 6.39Zm-19.74-3.7-13-16.67a23.88 23.88 0 0 0-30.68-5.42l-54.8 32.72a8.06 8.06 0 0 1-6.87.64L68 80.58l-4 1.53.21.2 29.36 28.49a8 8 0 0 1-1.43 12.58l-32.21 19.49a8 8 0 0 1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71 0 0 1 .13.12l36 35.26a23.85 23.85 0 0 0 28.42 3.18Z"
}));
var _default = exports.default = AirplaneTakeoff;