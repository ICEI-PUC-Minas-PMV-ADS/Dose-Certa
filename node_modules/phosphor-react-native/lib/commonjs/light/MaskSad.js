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
const MaskSad = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "mask-sad-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M157 187.32a6 6 0 0 1-8.32 1.67c-6.67-4.43-12.19-7-20.68-7s-14 2.56-20.68 7a6 6 0 1 1-6.64-10c8.13-5.4 15.88-9 27.32-9s19.19 3.6 27.32 9a6 6 0 0 1 1.68 8.33ZM179.53 116c-3.06 3.42-9.74 6-15.53 6s-12.47-2.58-15.53-6a6 6 0 1 0-8.94 8c5.35 6 15.19 10 24.47 10s19.12-4 24.47-10a6 6 0 1 0-8.94-8ZM222 48v55.77c0 35.45-9.53 68.86-26.83 94.06C177.4 223.74 153.54 238 128 238s-49.4-14.26-67.17-40.16C43.53 172.64 34 139.23 34 103.78V48a14 14 0 0 1 19.06-13c14.19 5.46 42.8 14.7 74.94 14.7s60.75-9.24 74.94-14.7A14 14 0 0 1 222 48Zm-12 0a2 2 0 0 0-2.72-1.87C192.31 52 162.1 61.7 128 61.7S63.69 52 48.72 46.14a2 2 0 0 0-1.85.21A2 2 0 0 0 46 48v55.76C46 171.17 82.79 226 128 226s82-54.83 82-122.22Zm-93.53 76a6 6 0 1 0-8.94-8c-3.06 3.42-9.74 6-15.53 6s-12.47-2.58-15.53-6a6 6 0 0 0-8.94 8c5.35 6 15.19 10 24.47 10s19.12-4 24.47-10Z"
}));
var _default = exports.default = MaskSad;