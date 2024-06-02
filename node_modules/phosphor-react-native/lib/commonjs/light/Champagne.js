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
  className: "champagne-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M142.26 10H97.65A6 6 0 0 0 92 14.14c-1.47 4.51-35.53 110.73-5.85 151.57 6.75 9.28 16.1 14.62 27.86 15.95V234H96a6 6 0 1 0 0 12h48a6 6 0 1 0 0-12h-18v-52.34c11.76-1.33 21.11-6.67 27.85-15.95 29.68-40.84-4.37-147.06-5.84-151.57a6 6 0 0 0-5.75-4.14Zm-40.18 12h35.75c2.24 7.48 7 24.29 10.75 44H91.34c3.75-19.71 8.51-36.52 10.74-44Zm42 136.66C138.55 166.29 130.66 170 120 170s-18.6-3.71-24.14-11.34c-10.4-14.24-12.65-42.11-6.61-80.66h61.42c6.04 38.55 3.78 66.42-6.57 80.66ZM230 52a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm-24-32a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm0 80a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z"
}));
var _default = exports.default = Champagne;