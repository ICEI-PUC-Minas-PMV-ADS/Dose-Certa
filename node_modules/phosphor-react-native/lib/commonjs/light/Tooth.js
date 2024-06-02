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
const Tooth = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tooth-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M170.23 69.57 144.16 80l26.07 10.43a6 6 0 1 1-4.46 11.14L128 86.46l-37.77 15.11a6 6 0 0 1-7.8-3.35 6 6 0 0 1 3.34-7.79L111.84 80 85.77 69.57a6 6 0 0 1 4.46-11.14L128 73.53l37.77-15.1a6 6 0 1 1 4.46 11.14ZM222 79.75c0 42.45-7.91 74.9-14.59 94.64-8.59 25.41-20.22 44.74-31.91 53a13.7 13.7 0 0 1-13.94 1.23 14.1 14.1 0 0 1-8-11.69c-1.13-15.33-5.87-51-25.52-51s-24.39 35.64-25.52 51a14.1 14.1 0 0 1-14 13 13.69 13.69 0 0 1-8-2.58c-11.69-8.29-23.32-27.62-31.91-53C41.91 154.65 34 122.2 34 79.75A54 54 0 0 1 88 26h80a54 54 0 0 1 54 53.75Zm-12 0A42 42 0 0 0 168 38H88a42 42 0 0 0-42 41.76c-.07 73.93 24.69 126 41.44 137.88a1.77 1.77 0 0 0 1.88.15 2 2 0 0 0 1.19-1.71C93.46 176 106.77 154 128 154s34.54 22 37.49 62.09a2 2 0 0 0 1.19 1.71 1.77 1.77 0 0 0 1.88-.15c16.75-11.91 41.51-63.96 41.44-137.89Z"
}));
var _default = exports.default = Tooth;