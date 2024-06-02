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
  className: "chart-polar-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm83.13 96h-16.21A68.16 68.16 0 0 0 140 61.08V44.87A84.18 84.18 0 0 1 211.13 116ZM116 116H85.68A44.13 44.13 0 0 1 116 85.68Zm0 24v30.32A44.13 44.13 0 0 1 85.68 140Zm24 0h30.32A44.13 44.13 0 0 1 140 170.32Zm0-24V85.68A44.13 44.13 0 0 1 170.32 116Zm-24-71.13v16.21A68.16 68.16 0 0 0 61.08 116H44.87A84.18 84.18 0 0 1 116 44.87ZM44.87 140h16.21A68.16 68.16 0 0 0 116 194.92v16.21A84.18 84.18 0 0 1 44.87 140ZM140 211.13v-16.21A68.16 68.16 0 0 0 194.92 140h16.21A84.18 84.18 0 0 1 140 211.13Z"
}));
var _default = exports.default = ChartPolar;