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
const NyTimesLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ny-times-logo-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 112v112a79.58 79.58 0 0 1-32-6.66v-88.27Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 136a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm12.62-32.75-65.71-30.66a71.95 71.95 0 0 0-62.85 68.71l68.18-36.36A8 8 0 0 1 136 112v103.55a71.64 71.64 0 0 0 60.71-50A8 8 0 0 1 212 170.4a88 88 0 1 1-160.26-70.3A36 36 0 0 1 68 32a8.05 8.05 0 0 1 3.38.75l118.25 55.18A20 20 0 0 0 188 48a8 8 0 0 1 0-16 36 36 0 0 1 0 72 8.05 8.05 0 0 1-3.38-.75ZM88 203.83V142.4l-30.49 16.26A72.15 72.15 0 0 0 88 203.83Zm32-78.5-16 8.54v78a71 71 0 0 0 16 3.67ZM96.13 62 66.37 48.07a20 20 0 0 0-5.2 38.71c.6-.71 1.2-1.42 1.84-2.11A88 88 0 0 1 96.13 62Z"
}));
var _default = exports.default = NyTimesLogo;