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
  className: "airplane-takeoff-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 216a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4Zm71.93-123.59a4 4 0 0 1-1.88 2.7l-147.41 88a36.15 36.15 0 0 1-18.2 4.95 35.78 35.78 0 0 1-24.55-9.79l-36.16-35.38a12 12 0 0 1 3.44-19.68l3.07-1.5a4 4 0 0 1 3-.2l30 10.13L81.5 115.8 55.91 91a12 12 0 0 1 3.36-19.89l.16-.06 7.15-2.71a4 4 0 0 1 2.8 0l55.73 20.46L178.32 57a35.83 35.83 0 0 1 46.14 8.22l18.69 24a4 4 0 0 1 .78 3.19Zm-9.87-1.85-15.85-20.32a27.85 27.85 0 0 0-35.81-6.33l-54.82 32.73a4 4 0 0 1-3.44.32L68 76.31l-5.66 2.14a4 4 0 0 0-1 6.62 1.14 1.14 0 0 0 .11.11l29.35 28.49a4 4 0 0 1-.72 6.29l-32.22 19.48a4 4 0 0 1-3.35.37l-30.23-10.2-1.67.82-.18.09a4 4 0 0 0-1.16 6.59l36.15 35.39a27.82 27.82 0 0 0 33.16 3.72Z"
}));
var _default = exports.default = AirplaneTakeoff;