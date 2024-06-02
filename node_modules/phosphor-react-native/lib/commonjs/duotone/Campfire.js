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
const Campfire = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "campfire-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 108a52 52 0 0 1-52 52 24 24 0 0 0 24-24c0-24-24-40-24-40s-24 16-24 40a24 24 0 0 0 24 24 52 52 0 0 1-52-52c0-44 52-76 52-76s52 32 52 76Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 168a60.07 60.07 0 0 0 60-60c0-47.92-53.53-81.41-55.81-82.81a8 8 0 0 0-8.38 0A156 156 0 0 0 96.24 48C77.77 67.13 68 87.9 68 108a60.07 60.07 0 0 0 60 60Zm-16-32c0-13.57 10-24.46 16-29.79 6 5.33 16 16.22 16 29.79a16 16 0 0 1-32 0Zm16-94.34C139.74 50 172 76 172 108a43.83 43.83 0 0 1-12.09 30.24c.05-.74.09-1.49.09-2.24 0-28-26.44-45.91-27.56-46.66a8 8 0 0 0-8.88 0C122.44 90.09 96 108 96 136c0 .75 0 1.5.09 2.24A43.83 43.83 0 0 1 84 108c0-32 32.27-58 44-66.34Zm95.62 184.76a8 8 0 0 1-10.05 5.2L128 204.39l-85.57 27.23a8 8 0 1 1-4.85-15.25l64-20.37-64-20.38a8 8 0 1 1 4.85-15.24L128 187.6l85.57-27.22a8 8 0 1 1 4.85 15.24l-64 20.38 64 20.37a8 8 0 0 1 5.2 10.05Z"
}));
var _default = exports.default = Campfire;