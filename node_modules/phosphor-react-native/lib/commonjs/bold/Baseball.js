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
const Baseball = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "baseball-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20ZM77 194.66A108.9 108.9 0 0 0 85.54 182a12 12 0 1 0-20.77-12 83.28 83.28 0 0 1-4.77 7.27 83.73 83.73 0 0 1 0-98.54A83.28 83.28 0 0 1 64.77 86a12 12 0 1 0 20.77-12A108.9 108.9 0 0 0 77 61.34a83.76 83.76 0 0 1 102.06 0 108.9 108.9 0 0 0-8.6 12.66 12 12 0 1 0 20.77 12 83.28 83.28 0 0 1 4.77-7.27 83.73 83.73 0 0 1 0 98.54 83.28 83.28 0 0 1-4.74-7.28 12 12 0 1 0-20.77 12 108.9 108.9 0 0 0 8.51 12.67 83.76 83.76 0 0 1-102.06 0Zm22.2-80.14A110 110 0 0 1 100 128a110 110 0 0 1-.83 13.48A12 12 0 0 1 87.27 152a12.83 12.83 0 0 1-1.5-.09 12 12 0 0 1-10.42-13.39A85.75 85.75 0 0 0 76 128a85.75 85.75 0 0 0-.65-10.52 12 12 0 1 1 23.82-3Zm71.06 37.39a12.83 12.83 0 0 1-1.5.09 12 12 0 0 1-11.9-10.52 109.88 109.88 0 0 1 0-27 12 12 0 1 1 23.82 3 85.46 85.46 0 0 0 0 21 12 12 0 0 1-10.45 13.43Z"
}));
var _default = exports.default = Baseball;