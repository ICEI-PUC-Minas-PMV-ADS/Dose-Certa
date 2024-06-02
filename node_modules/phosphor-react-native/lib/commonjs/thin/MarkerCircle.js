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
const MarkerCircle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "marker-circle-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M198.71 57.29A100 100 0 1 0 57.29 198.71 100 100 0 1 0 198.71 57.29ZM84 208.83V176a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v32.83a92.25 92.25 0 0 1-88 0ZM108.15 140H152a4 4 0 0 1 4 4v20h-56v-20a4 4 0 0 1 4-4Zm4.93-8 11-52.82a4 4 0 0 1 7.84 0l11 52.82Zm80 61.05A92.41 92.41 0 0 1 180 203.9V176a12 12 0 0 0-12-12h-4v-20a12 12 0 0 0-12-12h-.91l-11.34-54.45a12 12 0 0 0-23.5 0L104.91 132H104a12 12 0 0 0-12 12v20h-4a12 12 0 0 0-12 12v27.9a92.41 92.41 0 0 1-13-10.85 92 92 0 1 1 130.1 0Z"
}));
var _default = exports.default = MarkerCircle;