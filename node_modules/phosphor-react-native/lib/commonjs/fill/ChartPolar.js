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
const ChartPolar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chart-polar-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M120 199.54v27.74a4 4 0 0 1-4.46 4 104.22 104.22 0 0 1-90.8-90.8 4 4 0 0 1 4-4.46h27.72A72.11 72.11 0 0 0 120 199.54ZM183.42 136H136v47.42A56.11 56.11 0 0 0 183.42 136ZM136 72.58V120h47.42A56.11 56.11 0 0 0 136 72.58ZM227.28 136h-27.74A72.11 72.11 0 0 1 136 199.54v27.74a4 4 0 0 0 4.46 4 104.22 104.22 0 0 0 90.8-90.8 4 4 0 0 0-3.98-4.48Zm-27.74-16h27.74a4 4 0 0 0 4-4.46 104.22 104.22 0 0 0-90.8-90.8 4 4 0 0 0-4.46 4v27.72A72.11 72.11 0 0 1 199.54 120Zm-84-95.26a104.22 104.22 0 0 0-90.8 90.8 4 4 0 0 0 4 4.46h27.72A72.11 72.11 0 0 1 120 56.46V28.72a4 4 0 0 0-4.46-3.98ZM72.58 120H120V72.58A56.11 56.11 0 0 0 72.58 120ZM120 183.42V136H72.58A56.11 56.11 0 0 0 120 183.42Z"
}));
var _default = exports.default = ChartPolar;