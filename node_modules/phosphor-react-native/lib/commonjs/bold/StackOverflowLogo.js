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
const StackOverflowLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "stack-overflow-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 151.67V216a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-64.33a12 12 0 1 1 24 0v52.23h136v-52.23a12 12 0 1 1 24 0ZM88 183.81h80a12.06 12.06 0 0 0 0-24.11H88a12.06 12.06 0 0 0 0 24.11ZM96.2 113l75.17 27.49a12.05 12.05 0 0 0 8.21-22.66l-75.17-27.48A12 12 0 0 0 96.2 113ZM128 49.29l61.29 51.64a12 12 0 0 0 16.9-1.48 12.09 12.09 0 0 0-1.48-17l-61.27-51.63a12 12 0 0 0-16.91 1.49A12.1 12.1 0 0 0 128 49.29Z"
}));
var _default = exports.default = StackOverflowLogo;