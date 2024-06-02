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
const Polygon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "polygon-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M233.47 97.45a36 36 0 0 0-50.92-50.92 36.18 36.18 0 0 0-4.12 4.95l-22.55-6.15a36 36 0 0 0-61.34-22.8 36.05 36.05 0 0 0-7.8 39.24l-29.55 26.6a36.08 36.08 0 0 0-42.66 6.17 36 36 0 0 0 45.73 55.21l65.28 47.87A36 36 0 1 0 182.62 180L208 108a35.91 35.91 0 0 0 25.47-10.55Zm-93.74 80.81-65.28-47.87a36.19 36.19 0 0 0-1.21-24.17l29.56-26.61a36 36 0 0 0 42.66-6.16 35.47 35.47 0 0 0 4.12-5l22.55 6.15a35.86 35.86 0 0 0 10.42 22.8 38.06 38.06 0 0 0 2.85 2.6L160 172a36 36 0 0 0-20.27 6.26ZM216.5 63.5a12 12 0 1 1-17 0 12 12 0 0 1 17 0Zm-105-24a12 12 0 1 1 0 17 12 12 0 0 1 .01-17Zm-80 89a12 12 0 1 1 17 0 12 12 0 0 1-17-.01Zm137 88a12 12 0 1 1 0-17 12 12 0 0 1-.01 17Z"
}));
var _default = exports.default = Polygon;