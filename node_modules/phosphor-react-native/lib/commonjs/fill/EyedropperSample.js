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
  className: "eyedropper-sample-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 67.3a35.79 35.79 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L138.8 66.2a24 24 0 0 0-33.14.77l-5 5a16 16 0 0 0 0 22.64l2 2.06-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.65 13.65 0 0 0 36 219.29a15.9 15.9 0 0 0 17.71 3.36L71.24 215a39.9 39.9 0 0 0 37.05-10.75l51-51 2.06 2.06a16 16 0 0 0 22.62 0l5-5a24 24 0 0 0 .74-33.18l23.75-23.87A35.75 35.75 0 0 0 224 67.3ZM138 152H70.07l44-44 33.94 34Z"
}));
var _default = exports.default = EyedropperSample;