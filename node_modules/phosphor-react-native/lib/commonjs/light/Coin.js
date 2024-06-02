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
const Coin = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "coin-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M206.68 65.63C186.23 55.41 159 50 128 50s-58.23 5.41-78.68 15.63C29.41 75.58 18 89.57 18 104v48c0 14.43 11.41 28.42 31.32 38.37C69.77 200.59 97 206 128 206s58.23-5.41 78.68-15.63C226.59 180.42 238 166.43 238 152v-48c0-14.43-11.41-28.42-31.32-38.37Zm-152 10.74C73.21 67.1 99.25 62 128 62s54.79 5.1 73.32 14.37C217 84.21 226 94.28 226 104s-9 19.79-24.68 27.63C182.79 140.9 156.75 146 128 146s-54.79-5.1-73.32-14.37C39 123.79 30 113.72 30 104s9-19.79 24.68-27.63ZM122 157.93v36c-19.24-.48-37.07-3.28-52-8.11v-35.4c15.27 4.51 32.85 7.07 52 7.51Zm12 0c19.15-.44 36.73-3 52-7.52v35.4c-14.93 4.83-32.76 7.63-52 8.11ZM30 152v-23a76 76 0 0 0 19.32 13.36q4.16 2.07 8.68 3.88v35c-1.13-.52-2.24-1-3.32-1.58C39 171.79 30 161.72 30 152Zm171.32 27.63c-1.08.54-2.19 1.06-3.32 1.58v-35q4.51-1.81 8.68-3.88A76 76 0 0 0 226 129v23c0 9.72-9 19.79-24.68 27.63Z"
}));
var _default = exports.default = Coin;