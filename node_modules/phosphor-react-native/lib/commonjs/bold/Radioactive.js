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
const Radioactive = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "radioactive-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm-32 16a12 12 0 0 0-12-12H44.47a83.88 83.88 0 0 1 31.2-54.11L95.38 96a12 12 0 1 0 20.78-12l-22-38a20 20 0 0 0-28.87-6.34 107.85 107.85 0 0 0-45.26 78.4 20.22 20.22 0 0 0 5.21 15.43A20 20 0 0 0 40 140h44a12 12 0 0 0 12-12Zm139.92-9.94a107.81 107.81 0 0 0-45.26-78.39A20 20 0 0 0 161.79 46l-21.95 38a12 12 0 0 0 20.78 12l19.71-34.13a83.88 83.88 0 0 1 31.2 54.13H172a12 12 0 0 0 0 24h44a20 20 0 0 0 14.71-6.51 20.22 20.22 0 0 0 5.21-15.43Zm-75.52 42.05a12 12 0 0 0-20.79 12L159.19 206a84.33 84.33 0 0 1-62.38 0l19.58-33.91a12 12 0 0 0-20.79-12l-21.82 37.8a20 20 0 0 0 8.91 28.15 108.24 108.24 0 0 0 90.62 0 20 20 0 0 0 8.91-28.15Z"
}));
var _default = exports.default = Radioactive;