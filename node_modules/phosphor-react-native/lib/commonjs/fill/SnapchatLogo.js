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
const SnapchatLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "snapchat-logo-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M245.47 189.74c-7.1 6.67-17.67 7.71-27.88 8.72-6.31.62-12.83 1.27-16.39 3.23-3.37 1.86-6.85 6.62-10.21 11.22-5.4 7.41-11.53 15.8-21.23 18.28a26.35 26.35 0 0 1-6.64.81c-6.88 0-13.7-2.32-19.9-4.43-5.55-1.89-10.8-3.68-15.21-3.68s-9.66 1.79-15.21 3.68c-8.19 2.79-17.47 6-26.54 3.62-9.71-2.48-15.84-10.87-21.24-18.28-3.36-4.6-6.84-9.36-10.21-11.22-3.56-2-10.08-2.61-16.38-3.23-10.22-1-20.79-2.05-27.89-8.72a8 8 0 0 1 2.77-13.36c.09 0 12.84-4.86 25.36-19a94 94 0 0 0 17.74-30.2L37 119.43a8 8 0 1 1 6-14.86l17.85 7.15A151.24 151.24 0 0 0 64 80a64 64 0 0 1 128 0 149 149 0 0 0 3.21 31.73l17.79-7.16a8 8 0 1 1 6 14.86l-19.3 7.72c14.08 38.35 42.64 49.09 43 49.23a8 8 0 0 1 2.77 13.36Z"
}));
var _default = exports.default = SnapchatLogo;