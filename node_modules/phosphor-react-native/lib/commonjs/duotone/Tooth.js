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
const Tooth = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tooth-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 79.76c.07 71.42-23.48 128.23-44 142.78a8 8 0 0 1-12.52-6C158 196.31 152 160 128 160s-30 36.31-31.51 56.53a8 8 0 0 1-12.52 6C63.48 208 39.93 151.18 40 79.76A47.94 47.94 0 0 1 88 32h80a47.94 47.94 0 0 1 48 47.76Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M171 71.42 149.54 80 171 88.57a8 8 0 1 1-6 14.85l-37-14.81-37 14.81a8 8 0 1 1-6-14.85L106.46 80 85 71.42a8 8 0 1 1 6-14.85l37 14.81 37-14.81a8 8 0 1 1 6 14.85Zm53 8.33c0 42.72-8 75.4-14.7 95.28-8.72 25.8-20.62 45.49-32.64 54a15.69 15.69 0 0 1-15.95 1.41 16.09 16.09 0 0 1-9.18-13.36c-.85-11.5-5.05-49.08-23.53-49.08s-22.68 37.59-23.53 49.11a16.09 16.09 0 0 1-16 14.9 15.67 15.67 0 0 1-9.13-2.95c-12-8.53-23.92-28.22-32.64-54C40 155.15 32 122.47 32 79.75A56 56 0 0 1 88 24h80a56 56 0 0 1 56 55.75Zm-16 0A40 40 0 0 0 168 40H88a40 40 0 0 0-40 39.76c0 40.55 7.51 71.4 13.85 90.14 11.05 32.66 23 43.37 26.61 46C91.57 174.67 105.59 152 128 152s36.45 22.71 39.49 63.94c3.6-2.59 15.57-13.26 26.66-46 6.34-18.78 13.85-49.63 13.85-90.18Z"
}));
var _default = exports.default = Tooth;