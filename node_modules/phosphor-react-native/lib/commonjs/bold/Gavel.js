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
const Gavel = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gavel-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m246.14 113.86-16-16a20 20 0 0 0-23.06-3.75l-45.2-45.2a20 20 0 0 0-3.74-23.06l-16-16a20 20 0 0 0-28.28 0l-64 64a20 20 0 0 0 0 28.28l16 16a20 20 0 0 0 23 3.79l-59.5 59.46a32 32 0 0 0 45.26 45.26L134 167.21a20 20 0 0 0 3.81 22.94l16 16a20 20 0 0 0 28.29 0l64-64a20 20 0 0 0 0-28.29ZM80 98.34 69.64 88 128 29.65 138.34 40ZM57.64 209.67a8 8 0 0 1-11.31-11.32l59.52-59.52 11.31 11.32Zm92.7-60.29-43.72-43.72 39-39 43.72 43.72Zm17.65 37L157.65 176 216 117.66 226.34 128Z"
}));
var _default = exports.default = Gavel;