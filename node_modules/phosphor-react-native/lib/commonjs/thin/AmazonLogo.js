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
  className: "amazon-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 168v32a4 4 0 0 1-8 0v-22.34l-9.1 9.1C224.52 189.37 188.3 228 128 228c-61.08 0-97.45-39.64-99-41.32a4 4 0 0 1 6-5.36c.35.39 35.63 38.68 93 38.68s92.68-38.29 93-38.68l.14-.15 9.17-9.17H208a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Zm-80-62.49V84a40 40 0 0 0-75.64-18.18 4 4 0 1 1-7.12-3.64A48 48 0 0 1 172 84v92a4 4 0 0 1-8 0v-17.51a48 48 0 1 1 0-53Zm0 26.49a40 40 0 1 0-40 40 40 40 0 0 0 40-40Z"
}));
var _default = exports.default = AmazonLogo;