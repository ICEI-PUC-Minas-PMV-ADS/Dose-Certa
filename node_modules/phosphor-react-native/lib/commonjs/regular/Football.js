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
const Football = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "football__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M229.06 53.89a32.92 32.92 0 0 0-26.95-26.95c-32.37-5.49-93.39-8-138.27 36.9s-42.39 105.9-36.9 138.27a32.92 32.92 0 0 0 27 26.95A206.58 206.58 0 0 0 88.27 232c32.09 0 72.05-8 103.89-39.84 44.89-44.88 42.39-105.9 36.9-138.27Zm-61.61-14a192 192 0 0 1 32 2.8 16.94 16.94 0 0 1 13.85 13.87 188.59 188.59 0 0 1 2.7 36.22L163.21 40c1.4-.08 2.79-.1 4.24-.1ZM56.56 213.3a16.94 16.94 0 0 1-13.86-13.86 188.59 188.59 0 0 1-2.7-36.22L92.78 216a187.79 187.79 0 0 1-36.22-2.7Zm124.3-32.44c-11.61 11.6-33.27 27.73-67.37 33.27l-71.62-71.62c5.54-34.1 21.67-55.76 33.27-67.37S108.4 47.4 142.5 41.86l71.63 71.63c-5.54 34.1-21.67 55.76-33.27 67.37Zm-15.22-90.5a8 8 0 0 1 0 11.31L151.3 116l6.34 6.34a8 8 0 1 1-11.31 11.3l-6.33-6.33L127.31 140l6.34 6.34a8 8 0 1 1-11.3 11.31L116 151.3l-14.34 14.34a8 8 0 1 1-11.31-11.31L104.7 140l-6.34-6.34a8 8 0 0 1 11.31-11.3l6.34 6.34 12.68-12.7-6.34-6.34a8 8 0 0 1 11.3-11.31l6.35 6.35 14.34-14.34a8 8 0 0 1 11.3 0Z"
}));
var _default = exports.default = Football;