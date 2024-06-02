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
const ToiletPaper = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "toilet-paper-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M80 120a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm164 0v88a20 20 0 0 1-20 20H112a20 20 0 0 1-20-20v-9.61C84 207.07 74.46 212 64 212c-29.65 0-52-39.55-52-92s22.35-92 52-92h128c29.65 0 52 39.55 52 92Zm-152 0c0-19.26-3.81-37.92-10.45-51.2C76.29 58.28 69.73 52 64 52s-12.29 6.28-17.55 16.8C39.81 82.08 36 100.74 36 120s3.81 37.92 10.45 51.2C51.71 181.72 58.27 188 64 188s12.29-6.28 17.55-16.8C88.19 157.92 92 139.26 92 120Zm128 84v-72h-8a12 12 0 0 1 0-24h7.5c-1.23-14.85-4.7-28.71-9.95-39.2S197.73 52 192 52H99.74c8.61 14.11 14.35 33.56 15.86 56h8.4a12 12 0 0 1 0 24h-8v72Zm-48-96h-8a12 12 0 0 0 0 24h8a12 12 0 0 0 0-24Z"
}));
var _default = exports.default = ToiletPaper;