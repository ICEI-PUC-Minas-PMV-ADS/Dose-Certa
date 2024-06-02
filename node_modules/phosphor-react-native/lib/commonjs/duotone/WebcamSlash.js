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
const WebcamSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "webcam-slash-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 32a72 72 0 1 0 72 72 72 72 0 0 0-72-72Zm0 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m213.92 210.62-160-176a8 8 0 1 0-11.84 10.76L58.82 63.8A80 80 0 0 0 120 183.6V200H32a8 8 0 0 0 0 16h165.19l4.89 5.38a8 8 0 1 0 11.84-10.76ZM64 104a63.65 63.65 0 0 1 6.26-27.62l18.42 20.26A40 40 0 0 0 128 144c1.2 0 2.39-.06 3.58-.17L150 164.11A64 64 0 0 1 64 104Zm72 96v-16.41a79.91 79.91 0 0 0 25.44-6.91l21.2 23.32ZM85.52 45.31a8 8 0 0 1 3-10.91 80 80 0 0 1 105 115.5 8 8 0 1 1-13.1-9.19 64 64 0 0 0-84-92.4 8 8 0 0 1-10.9-3Zm65.31 66.12A24 24 0 0 0 128 80a24.17 24.17 0 0 0-5.24.57A8 8 0 1 1 119.3 65a40 40 0 0 1 46.7 51.38 8 8 0 0 1-15.21-4.95Z"
}));
var _default = exports.default = WebcamSlash;