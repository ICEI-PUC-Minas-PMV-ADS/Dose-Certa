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
const CameraSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "camera-slash-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M56.88 31.93a12 12 0 1 0-17.76 16.14l4 4.37A28 28 0 0 0 20 80v112a28 28 0 0 0 28 28h147.42l3.7 4.07a12 12 0 0 0 17.76-16.14Zm49.35 90L136 154.64a24 24 0 0 1-29.77-32.75ZM48 196a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h16.51l24.92 27.41a48 48 0 0 0 63.34 69.67L173.6 196ZM236 80v94.14a12 12 0 0 1-24 0V80a4 4 0 0 0-4-4h-32a12 12 0 0 1-10-5.34L153.57 52h-51.51a12 12 0 0 1 0-24H160a12 12 0 0 1 10 5.34L182.42 52H208a28 28 0 0 1 28 28Z"
}));
var _default = exports.default = CameraSlash;