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
const LightningSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lightning-slash__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M53.92 34.62a8 8 0 1 0-11.84 10.76l39.25 43.18-39.18 42a8 8 0 0 0 3 13l57.63 21.61-14.62 73.26a8 8 0 0 0 13.69 7l61.86-66.28 38.37 42.2a8 8 0 1 0 11.84-10.76ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l30.12-32.27 60.78 66.86Zm-.71-143a8 8 0 0 1-.39-11.31l45.88-49.16a8 8 0 0 1 13.69 7L153.18 90.9l57.63 21.61a8 8 0 0 1 3 12.95l-22.3 23.89a8 8 0 0 1-11.7-10.91L194 123.29l-52.8-19.8a8 8 0 0 1-5-9.06l10.47-52.38L120 70.62a8 8 0 0 1-11.34.38Z"
}));
var _default = exports.default = LightningSlash;