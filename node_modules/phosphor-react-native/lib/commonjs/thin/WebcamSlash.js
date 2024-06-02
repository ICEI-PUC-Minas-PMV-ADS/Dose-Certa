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
  className: "webcam-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m211 213.31-160-176a4 4 0 0 0-6 5.38l18.8 20.63A76 76 0 0 0 124 179.89V204H32a4 4 0 0 0 0 8h167l6.08 6.69a4 4 0 1 0 5.92-5.38ZM100 103.18l26.14 28.75A28 28 0 0 1 100 104v-.82ZM60 104a67.62 67.62 0 0 1 9.4-34.52l23.6 26a36 36 0 0 0 40.13 44.14l23.63 26A68 68 0 0 1 60 104Zm72 100v-24.11a76.09 76.09 0 0 0 30.39-8.11l29.3 32.22ZM89 43.33a4 4 0 0 1 1.5-5.45 76 76 0 0 1 99.76 109.72 4 4 0 1 1-6.55-4.59 68 68 0 0 0-89.25-98.18 4 4 0 0 1-5.46-1.5Zm65.63 69.34a28 28 0 0 0-32.73-36 4 4 0 0 1-1.74-7.81 36 36 0 0 1 42.08 46.28 4 4 0 0 1-3.8 2.77 4.12 4.12 0 0 1-1.24-.2 4 4 0 0 1-2.57-5.04Z"
}));
var _default = exports.default = WebcamSlash;