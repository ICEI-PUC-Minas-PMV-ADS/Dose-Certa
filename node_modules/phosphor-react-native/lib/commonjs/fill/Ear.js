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
const Ear = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ear-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm20 128a4.21 4.21 0 0 0 1.33-.22 8 8 0 0 1 5.34 15.08A20 20 0 0 1 128 148c0-8.85 4.77-15.23 9-20.87 3.77-5 7-9.38 7-15.13a16 16 0 0 0-32 0 8 8 0 0 1-16 0 32 32 0 0 1 64 0c0 11.07-5.66 18.63-10.2 24.71-3.6 4.81-5.8 7.93-5.8 11.29a4 4 0 0 0 4 4Zm36-32a8 8 0 0 1-8-8 48 48 0 0 0-96 0c0 11.9 6.71 20.5 13.82 29.6 7 8.92 14.18 18.15 14.18 30.4a20 20 0 0 0 34 14.29 8 8 0 1 1 11.19 11.42A36 36 0 0 1 92 172c0-6.74-5-13.14-10.79-20.55C73.54 141.63 64 129.41 64 112a64 64 0 0 1 128 0 8 8 0 0 1-8 8Z"
}));
var _default = exports.default = Ear;