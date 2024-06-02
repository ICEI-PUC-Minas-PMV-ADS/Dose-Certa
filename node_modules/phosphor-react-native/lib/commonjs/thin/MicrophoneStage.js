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
const MicrophoneStage = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "microphone-stage-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 20a68.08 68.08 0 0 0-68 68 67.19 67.19 0 0 0 .82 10.49l-70.48 96.1a11.94 11.94 0 0 0 1.2 15.58l14.29 14.3a11.95 11.95 0 0 0 15.58 1.19l96.11-70.48A68 68 0 1 0 168 20Zm60 68a59.7 59.7 0 0 1-14.87 39.47l-84.59-84.6A59.94 59.94 0 0 1 228 88ZM56.68 219.21a4 4 0 0 1-5.2-.4l-14.29-14.29a4 4 0 0 1-.4-5.2l66.46-90.62a68.31 68.31 0 0 0 44.05 44.05ZM108 88a59.77 59.77 0 0 1 14.87-39.47l84.6 84.6A60 60 0 0 1 108 88Zm-1.17 61.17a4 4 0 0 1 0 5.65l-8 8a4 4 0 1 1-5.65-5.65l8-8a4 4 0 0 1 5.66-.01Z"
}));
var _default = exports.default = MicrophoneStage;