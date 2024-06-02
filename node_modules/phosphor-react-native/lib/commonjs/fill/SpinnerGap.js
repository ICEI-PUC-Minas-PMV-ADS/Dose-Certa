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
const SpinnerGap = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "spinner-gap-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM48 136a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16Zm46.06 37.25-17 17a8 8 0 0 1-11.32-11.32l17-17a8 8 0 0 1 11.31 11.31Zm0-79.19a8 8 0 0 1-11.31 0l-17-17a8 8 0 0 1 11.34-11.29l17 17a8 8 0 0 1-.03 11.29ZM136 208a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0Zm0-136a8 8 0 0 1-16 0V48a8 8 0 0 1 16 0Zm54.23 118.23a8 8 0 0 1-11.32 0l-17-17a8 8 0 0 1 11.31-11.31l17 17a8 8 0 0 1 .01 11.31ZM208 136h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16Z"
}));
var _default = exports.default = SpinnerGap;