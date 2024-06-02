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
  className: "webcam-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m212.44 212-160-176a6 6 0 0 0-8.88 8l17.75 19.56A78 78 0 0 0 122 181.75V202H32a6 6 0 0 0 0 12h166.07l5.49 6a6 6 0 0 0 8.88-8.08Zm-91.67-83a26.05 26.05 0 0 1-18.31-20.15ZM62 104a65.6 65.6 0 0 1 7.78-31.12l21.07 23.18A38 38 0 0 0 128 142a37.59 37.59 0 0 0 4.38-.26l21.06 23.17A66 66 0 0 1 62 104Zm72 98v-20.24a78.27 78.27 0 0 0 27.93-7.51L187.16 202ZM87.26 44.32a6 6 0 0 1 2.26-8.18 78 78 0 0 1 102.37 112.61 6 6 0 1 1-9.82-6.89 66 66 0 0 0-86.63-95.29 6 6 0 0 1-8.18-2.25Zm65.47 67.73a26 26 0 0 0-30.4-33.43 6 6 0 1 1-2.6-11.72 38 38 0 0 1 44.41 48.86 6 6 0 0 1-11.41-3.71Z"
}));
var _default = exports.default = WebcamSlash;