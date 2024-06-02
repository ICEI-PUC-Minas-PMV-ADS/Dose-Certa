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
const Goggles = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "goggles-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 152c0 17.67-30.33 32-48 32a32 32 0 0 1 0-64c17.67 0 48 14.33 48 32ZM72 120c-17.67 0-48 14.33-48 32s30.33 32 48 32a32 32 0 0 0 0-64Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M256 136a72.08 72.08 0 0 0-72-72H72a72.08 72.08 0 0 0-72 72 24.06 24.06 0 0 0 17 23c6.06 20.37 37.63 33 55 33a40.07 40.07 0 0 0 39.2-32h33.6a40.07 40.07 0 0 0 39.2 32c17.33 0 48.9-12.66 55-33a24.06 24.06 0 0 0 17-23ZM45.45 167.74C37 162.76 32 156.88 32 152s4.91-10.61 13.13-15.55l37.21 37.2A23.74 23.74 0 0 1 72 176c-7.53 0-18.2-3.32-26.55-8.26Zm48.2-5.4L61 129.7a42.72 42.72 0 0 1 11-1.7 24 24 0 0 1 24 24 23.74 23.74 0 0 1-2.35 10.34ZM160 152a23.88 23.88 0 0 1 5.46-15.22L201 172.32c-6 2.3-12.15 3.68-17 3.68a24 24 0 0 1-24-24Zm55.63 12.31-35.92-35.92A24.19 24.19 0 0 1 184 128c7.53 0 18.2 3.32 26.55 8.26S224 147.12 224 152c0 3.79-3 8.2-8.37 12.31Zm22.05-22.69C229.34 123.25 200.34 112 184 112a40.07 40.07 0 0 0-39.2 32h-33.6A40.07 40.07 0 0 0 72 112c-16.34 0-45.34 11.25-53.68 29.62A8 8 0 0 1 16 136a56.06 56.06 0 0 1 56-56h112a56.06 56.06 0 0 1 56 56 8 8 0 0 1-2.32 5.62Z"
}));
var _default = exports.default = Goggles;