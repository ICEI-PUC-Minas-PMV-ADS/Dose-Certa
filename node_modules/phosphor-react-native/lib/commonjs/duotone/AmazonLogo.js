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
const AmazonLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "amazon-logo-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 132a44 44 0 1 1-44-44 44 44 0 0 1 44 44Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 168v32a8 8 0 0 1-16 0v-12.69l-2.21 2.22C226.69 192.9 189.44 232 128 232c-62.84 0-100.38-40.91-101.95-42.65A8 8 0 0 1 38 178.65c.27.35 34.5 37.35 90 37.35s89.73-37 90.07-37.36a3.85 3.85 0 0 1 .27-.3l2.35-2.34H208a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8Zm-88-73.47V84a36 36 0 0 0-68.08-16.36 8 8 0 0 1-14.25-7.28A52 52 0 0 1 176 84v92a8 8 0 0 1-16 0v-6.53a52 52 0 1 1 0-74.94Zm0 37.47a36 36 0 1 0-36 36 36 36 0 0 0 36-36Z"
}));
var _default = exports.default = AmazonLogo;