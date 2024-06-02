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
  className: "chart-polar__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm87.63 96h-24.15A64.1 64.1 0 0 0 136 64.52V40.37A88.13 88.13 0 0 1 215.63 120ZM120 120H80.68A48.09 48.09 0 0 1 120 80.68Zm0 16v39.32A48.09 48.09 0 0 1 80.68 136Zm16 0h39.32A48.09 48.09 0 0 1 136 175.32Zm0-16V80.68A48.09 48.09 0 0 1 175.32 120Zm-16-79.63v24.15A64.1 64.1 0 0 0 64.52 120H40.37A88.13 88.13 0 0 1 120 40.37ZM40.37 136h24.15A64.1 64.1 0 0 0 120 191.48v24.15A88.13 88.13 0 0 1 40.37 136ZM136 215.63v-24.15A64.1 64.1 0 0 0 191.48 136h24.15A88.13 88.13 0 0 1 136 215.63Z"
}));
var _default = exports.default = ChartPolar;