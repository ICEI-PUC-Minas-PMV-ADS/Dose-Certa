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
const Recycle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "recycle-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92 208a4 4 0 0 1-4 4H40a20 20 0 0 1-17.31-30l39.14-67.62-23.43 6.27a4 4 0 1 1-2.07-7.72l32.77-8.77A4 4 0 0 1 74 107l8.79 32.77a4 4 0 0 1-2.82 4.9 3.77 3.77 0 0 1-1 .14 4 4 0 0 1-3.86-3l-6.3-23.47L29.65 186A12 12 0 0 0 40 204h48a4 4 0 0 1 4 4Zm141.28-26-23.14-40a4 4 0 0 0-6.93 4l23.14 40A12 12 0 0 1 216 204h-78.34l17.17-17.17a4 4 0 0 0-5.66-5.66l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 0 0 5.66-5.66L137.66 212H216a20 20 0 0 0 17.31-30Zm-94.9-148 39.14 67.62-23.43-6.28a4 4 0 0 0-2.07 7.73l32.78 8.78a3.65 3.65 0 0 0 1 .14 4 4 0 0 0 3.86-3l8.79-32.79a4 4 0 1 0-7.72-2.07l-6.3 23.47L145.31 30a20 20 0 0 0-34.62 0L87.53 70a4 4 0 0 0 6.93 4l23.15-40a12 12 0 0 1 20.77 0Z"
}));
var _default = exports.default = Recycle;