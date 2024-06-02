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
const Sword = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sword-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 36h-64a4 4 0 0 0-3.17 1.56l-66.78 86.82-12.86-12.86a12 12 0 0 0-17 0l-12.67 12.69a12 12 0 0 0 0 17L62.34 164l-30.82 30.83a12 12 0 0 0 0 17l12.68 12.66a12 12 0 0 0 17 0L92 193.67l22.81 22.82a12 12 0 0 0 17 0l12.69-12.7a12 12 0 0 0 0-17L131.62 174l86.82-66.79A4 4 0 0 0 220 104V40a4 4 0 0 0-4-4ZM55.52 218.83a4 4 0 0 1-5.66 0l-12.69-12.68a4 4 0 0 1 0-5.66L68 169.67 86.34 188Zm83.31-26.36a4 4 0 0 1 0 5.67l-12.7 12.69a4 4 0 0 1-5.66 0l-75.3-75.3a4 4 0 0 1 0-5.66l12.7-12.69a4 4 0 0 1 5.66 0ZM212 102l-86.08 66.22L109.66 152l53.17-53.17a4 4 0 1 0-5.66-5.66L104 146.34l-16.25-16.26L154 44h58Z"
}));
var _default = exports.default = Sword;