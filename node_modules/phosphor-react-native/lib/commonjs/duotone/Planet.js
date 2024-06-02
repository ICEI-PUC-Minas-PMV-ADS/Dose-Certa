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
const Planet = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "planet-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 128a88 88 0 1 1-88-88 88 88 0 0 1 88 88Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M245.11 60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93 95.93 0 0 0 32 128a98 98 0 0 0 .78 12.31C5.09 169 5.49 186 10.9 195.32 16 204.16 26.64 208 40.64 208a124.11 124.11 0 0 0 28.79-4A95.93 95.93 0 0 0 224 128a97.08 97.08 0 0 0-.77-12.25c12.5-13 20.82-25.35 23.65-35.92 1.95-7.32 1.36-13.76-1.77-19.15ZM128 48a80.11 80.11 0 0 1 78 62.2c-17.06 16.06-40.15 32.53-62.07 45.13-27.55 15.81-51.45 25.67-70.51 31.07A79.94 79.94 0 0 1 128 48ZM24.74 187.29c-1.46-2.51-.65-7.24 2.22-13a79.05 79.05 0 0 1 10.29-15.05 96 96 0 0 0 18 31.32c-17.25 2.9-28.01 1.05-30.51-3.27ZM128 208a79.45 79.45 0 0 1-38.56-9.94 370 370 0 0 0 62.43-28.86c21.58-12.39 40.68-25.82 56.07-39.08A80.07 80.07 0 0 1 128 208ZM231.42 75.69c-1.7 6.31-6.19 13.53-12.63 21.13a95.69 95.69 0 0 0-18-31.35c14.21-2.35 27.37-2.17 30.5 3.24.9 1.57.95 3.92.13 6.98Z"
}));
var _default = exports.default = Planet;