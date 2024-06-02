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
const Broadcast = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "broadcast-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M160 128a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 88a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm73.71 7.14a80 80 0 0 1-14.08 22.2 8 8 0 0 1-11.92-10.67 63.95 63.95 0 0 0 0-85.33 8 8 0 1 1 11.92-10.67 80.08 80.08 0 0 1 14.08 84.47ZM69 103.09a64 64 0 0 0 11.26 67.58 8 8 0 0 1-11.92 10.67 79.93 79.93 0 0 1 0-106.67 8 8 0 1 1 11.95 10.67A63.77 63.77 0 0 0 69 103.09ZM248 128a119.58 119.58 0 0 1-34.29 84 8 8 0 1 1-11.42-11.2 103.9 103.9 0 0 0 0-145.56A8 8 0 1 1 213.71 44 119.58 119.58 0 0 1 248 128ZM53.71 200.78A8 8 0 1 1 42.29 212a119.87 119.87 0 0 1 0-168 8 8 0 1 1 11.42 11.2 103.9 103.9 0 0 0 0 145.56Z"
}));
var _default = exports.default = Broadcast;