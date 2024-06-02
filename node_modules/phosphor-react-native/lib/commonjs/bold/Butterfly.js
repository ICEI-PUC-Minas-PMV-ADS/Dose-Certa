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
const Butterfly = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "butterfly-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.79 48c-4.27-5.48-12.4-12-26.88-12-17.86 0-40.5 11.7-60.57 31.3-3 2.89-5.74 5.85-8.34 8.84V56a12 12 0 0 0-24 0v20.14c-2.6-3-5.38-6-8.34-8.84C87.59 47.7 65 36 47.09 36c-14.48 0-22.61 6.54-26.88 12C7 65 12 93.91 19.28 122.66c5.75 22.64 17.8 33 28.88 37.69A48.12 48.12 0 0 0 92 228a47.87 47.87 0 0 0 36-16.28A48 48 0 0 0 212 180a48.51 48.51 0 0 0-4.14-19.65c11.08-4.67 23.13-15 28.88-37.69C244 93.91 249 65 235.79 48ZM92 204a24 24 0 0 1-24-24 24.36 24.36 0 0 1 21.31-24.07 12 12 0 0 0-2.64-23.86 47.63 47.63 0 0 0-21.5 7.93c-8.19-.29-18-4.92-22.63-23.24-7.41-29.18-8.55-47.35-3.39-54C39.74 62 41.3 60 47.09 60c11.21 0 28.82 9.83 43.81 24.47 15.25 14.9 25.1 31.86 25.1 43.2V180a24 24 0 0 1-24 24Zm121.45-87.25C208.81 135.07 199 139.7 190.82 140a47.54 47.54 0 0 0-21.51-7.92 12 12 0 1 0-2.64 23.86A24.36 24.36 0 0 1 188 180a24 24 0 1 1-48 0v-52.33c0-11.34 9.85-28.3 25.1-43.2C180.09 69.83 197.7 60 208.91 60c5.79 0 7.35 2 7.94 2.76 5.15 6.64 4.02 24.81-3.39 53.99Z"
}));
var _default = exports.default = Butterfly;