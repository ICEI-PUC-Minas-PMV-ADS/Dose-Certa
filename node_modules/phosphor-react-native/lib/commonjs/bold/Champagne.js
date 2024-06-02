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
const Champagne = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "champagne-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M153.7 12.29A12 12 0 0 0 142.29 4h-44.6a12 12 0 0 0-11.41 8.29 453.85 453.85 0 0 0-14.36 60.29c-7.44 45.34-4.28 77.86 9.37 96.66A44.11 44.11 0 0 0 108 186.72V228H96a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24h-12v-41.28a44.11 44.11 0 0 0 26.7-17.48c13.66-18.8 16.81-51.32 9.37-96.66a453.85 453.85 0 0 0-14.37-60.29ZM133.36 28c2.08 7.25 5.14 18.7 7.92 32H98.7c2.78-13.3 5.84-24.75 7.92-32Zm5.91 127.14c-4.4 6-10.52 8.86-19.28 8.86s-14.88-2.82-19.28-8.86c-8.83-12.14-11-37.26-6.25-71.14h51.06c4.75 33.88 2.58 59-6.25 71.14ZM240 56a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-60-36a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm36 84a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z"
}));
var _default = exports.default = Champagne;