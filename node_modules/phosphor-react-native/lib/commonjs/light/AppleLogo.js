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
const AppleLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "apple-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.4 167.84C201.71 155.69 198 135.12 198 120c0-18.42 13.86-34.29 22.12-42.12a6 6 0 0 0 0-8.71C208 57.7 187.07 50 168 50a70.23 70.23 0 0 0-40 12.55 69.6 69.6 0 0 0-89.31 8.08A72.63 72.63 0 0 0 18 123.35a125.11 125.11 0 0 0 39.53 88.33A37.85 37.85 0 0 0 83.6 222h87.7a37.83 37.83 0 0 0 27.7-11.93 122.6 122.6 0 0 0 17.54-24.2c6.55-12 5.77-13.75 5-15.48a6.07 6.07 0 0 0-2.14-2.55Zm-29.23 34A25.82 25.82 0 0 1 171.3 210H83.6a25.85 25.85 0 0 1-17.82-7A113.21 113.21 0 0 1 30 123a60.55 60.55 0 0 1 17.21-44A56.82 56.82 0 0 1 88 62h.81a57.35 57.35 0 0 1 35.44 12.71 6 6 0 0 0 7.5 0A57.39 57.39 0 0 1 168 62c13.89 0 28.81 4.68 39.11 12-9.44 10.14-21.1 26.59-21.1 46 0 23.78 7.81 42.6 22.66 54.77a107.33 107.33 0 0 1-18.5 27.12Zm-60-171.39A38 38 0 0 1 167 2h1a6 6 0 0 1 0 12h-1a26 26 0 0 0-25.18 19.5 6 6 0 1 1-11.62-3Z"
}));
var _default = exports.default = AppleLogo;