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
const Cat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cat-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M223.65 29.53a20 20 0 0 0-21.79 4.34c-.2.2-.39.4-.57.61l-15 17.3a115.34 115.34 0 0 0-116.5 0l-15-17.3c-.18-.21-.37-.41-.57-.61A20 20 0 0 0 20 48v88c0 55.14 48.45 100 108 100s108-44.86 108-100V48a20 20 0 0 0-12.35-18.47ZM212 136c0 38.22-31.35 69.93-72 75.21V197l12.49-12.49a12 12 0 0 0-17-17L128 175l-7.51-7.52a12 12 0 0 0-17 17L116 197v14.24c-40.65-5.28-72-37-72-75.21V58.74l14.54 16.73a12 12 0 0 0 16.21 1.76A86 86 0 0 1 96 65.74V88a12 12 0 0 0 24 0V60.35q4-.35 8-.35t8 .35V88a12 12 0 0 0 24 0V65.74a86.2 86.2 0 0 1 21.25 11.49 12 12 0 0 0 16.21-1.76L212 58.74Zm-112 4a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm88 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z"
}));
var _default = exports.default = Cat;