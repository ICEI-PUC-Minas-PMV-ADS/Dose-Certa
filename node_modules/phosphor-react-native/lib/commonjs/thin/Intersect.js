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
const Intersect = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "intersect-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M171.17 84.83a76 76 0 1 0-86.34 86.34 76 76 0 1 0 86.34-86.34ZM28 96a68 68 0 0 1 134.93-11.93c-1 0-2-.07-2.93-.07a76.08 76.08 0 0 0-76 76c0 1 0 2 .07 2.93A68.1 68.1 0 0 1 28 96Zm136 0a67.59 67.59 0 0 1-7.45 30.89l-27.44-27.44A67.59 67.59 0 0 1 160 92c1.3 0 2.6 0 3.88.12.12 1.28.12 2.58.12 3.88Zm-72 64a67.59 67.59 0 0 1 7.45-30.89l27.44 27.44A67.59 67.59 0 0 1 96 164c-1.3 0-2.6-.05-3.88-.12-.07-1.28-.12-2.58-.12-3.88Zm42-7.64L103.64 122A68.74 68.74 0 0 1 122 103.64L152.36 134A68.74 68.74 0 0 1 134 152.36ZM160 228a68.1 68.1 0 0 1-66.93-56.07c1 0 2 .07 2.93.07a76.08 76.08 0 0 0 76-76c0-1 0-2-.07-2.93A68 68 0 0 1 160 228Z"
}));
var _default = exports.default = Intersect;