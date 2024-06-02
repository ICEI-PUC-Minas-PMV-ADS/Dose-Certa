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
const Scales = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "scales-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m235.71 134.51-32-80a4 4 0 0 0-4.57-2.41L132 67V40a4 4 0 0 0-8 0v28.79L55.13 84.1a4 4 0 0 0-2.84 2.41l-32 80A4 4 0 0 0 20 168c0 20.4 22.08 28 36 28s36-7.6 36-28a4 4 0 0 0-.29-1.49L61.46 90.88 124 77v135h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8h-20V75.21l61.47-13.66-29.18 73A4 4 0 0 0 164 136c0 20.4 22.08 28 36 28s36-7.6 36-28a4 4 0 0 0-.29-1.49ZM56 188c-7.15 0-27.37-3.56-28-19.27l28-70 28 70C83.37 184.44 63.15 188 56 188Zm144-32c-7.15 0-27.37-3.56-28-19.27l28-70 28 70c-.63 15.71-20.85 19.27-28 19.27Z"
}));
var _default = exports.default = Scales;