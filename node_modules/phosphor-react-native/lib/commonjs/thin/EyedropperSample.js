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
const EyedropperSample = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "eyedropper-sample-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220 67.37a31.8 31.8 0 0 0-10-22.82c-12.46-11.8-32.66-11.33-45 1.05l-22.18 22.26-2-2a20 20 0 0 0-28.28 0l-9 9a12 12 0 0 0 0 17l4.89 4.89-53.88 53.77A35.81 35.81 0 0 0 45.42 186l-8.6 19.7a9.7 9.7 0 0 0 2 10.79A12 12 0 0 0 52.15 219l18.72-8.18a35.92 35.92 0 0 0 34.59-9.37l53.86-53.87 4.88 4.89a12 12 0 0 0 17 0l9-9a20 20 0 0 0 0-28.29l-2.06-2.06 22.55-22.69A31.76 31.76 0 0 0 220 67.37ZM99.81 195.78a28 28 0 0 1-28 7 4 4 0 0 0-2.78.15l-20 8.75a4 4 0 0 1-4.43-.84 1.73 1.73 0 0 1-.36-1.93l9.19-21.06a4 4 0 0 0 .12-2.88 27.93 27.93 0 0 1 1.22-21h76.83ZM139.6 156H60.41l53.65-53.67 39.6 39.61Zm40-45.66a4 4 0 0 0 0 5.65l4.89 4.89a12 12 0 0 1 0 17l-9 9a4 4 0 0 1-5.66 0L109.18 86.1a4 4 0 0 1 0-5.66l9-9a12 12 0 0 1 17 0l4.82 4.92a4 4 0 0 0 2.83 1.17 4 4 0 0 0 2.83-1.18l25-25.1c9.33-9.34 24.52-9.73 33.87-.89a24 24 0 0 1 .47 34.43Z"
}));
var _default = exports.default = EyedropperSample;