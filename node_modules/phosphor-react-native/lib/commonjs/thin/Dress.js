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
const Dress = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dress-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m211 211.27-.06-.12-46.41-98.86 21.68-34v-.1a11.94 11.94 0 0 0 0-12.34l-.15-.24L164 34V8a4 4 0 0 0-8 0v25.82l-6.13 7.67a28 28 0 0 1-43.74 0L100 33.82V8a4 4 0 0 0-8 0v26L69.86 65.59l-.15.24a11.94 11.94 0 0 0 0 12.34.93.93 0 0 1 .05.1l21.68 34L45 211.15l-.06.12A12 12 0 0 0 56 228h144a12 12 0 0 0 11-16.73ZM76.54 74a4 4 0 0 1 0-4l19.67-28.1 3.68 4.59a36 36 0 0 0 56.22 0l3.68-4.59 19.7 28.1a4 4 0 0 1 0 4l-21.65 34H98.19Zm126.79 144.2A3.94 3.94 0 0 1 200 220H56a3.94 3.94 0 0 1-3.33-1.8 3.89 3.89 0 0 1-.36-3.72L98.54 116h58.92l46.23 98.48a3.89 3.89 0 0 1-.36 3.72Z"
}));
var _default = exports.default = Dress;