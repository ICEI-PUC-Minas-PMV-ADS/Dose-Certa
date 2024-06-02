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
const Crosshair = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "crosshair-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 116h-4.72A100.21 100.21 0 0 0 140 28.72V24a12 12 0 0 0-24 0v4.72A100.21 100.21 0 0 0 28.72 116H24a12 12 0 0 0 0 24h4.72A100.21 100.21 0 0 0 116 227.28V232a12 12 0 0 0 24 0v-4.72A100.21 100.21 0 0 0 227.28 140H232a12 12 0 0 0 0-24Zm-92 87v-3a12 12 0 0 0-24 0v3a76.15 76.15 0 0 1-63-63h3a12 12 0 0 0 0-24h-3a76.15 76.15 0 0 1 63-63v3a12 12 0 0 0 24 0v-3a76.15 76.15 0 0 1 63 63h-3a12 12 0 0 0 0 24h3a76.15 76.15 0 0 1-63 63ZM128 84a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Zm0 64a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z"
}));
var _default = exports.default = Crosshair;