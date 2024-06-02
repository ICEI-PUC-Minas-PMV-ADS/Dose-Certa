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
const Butterfly = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "butterfly-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M229.5 52.94C224.89 47 218 44 208.93 44c-25.86 0-61.28 28.73-76.93 57.28V56a4 4 0 0 0-8 0v45.28C108.35 72.73 72.93 44 47.07 44c-9 0-16 3-20.57 8.94-11.1 14.26-6 42.25.5 67.75 3.67 14.42 10.55 24.64 20.48 30.38a36.79 36.79 0 0 0 12.75 4.45A40 40 0 1 0 128 197.43a40 40 0 1 0 67.77-41.9 36.82 36.82 0 0 0 12.75-4.46c9.93-5.74 16.81-16 20.48-30.38 6.47-25.5 11.6-53.49.5-67.75ZM92 212a32.12 32.12 0 0 1-3.56-64 4 4 0 0 0-.88-8 39.64 39.64 0 0 0-19.78 8c-22.8 1.24-30.68-20-33-29.24-5.65-22.24-11-49.26-1.95-60.87C35.87 53.91 40.54 52 47.07 52 76.55 52 124 98.68 124 127.67V180a32 32 0 0 1-32 32Zm129.24-93.28c-2.34 9.22-10.22 30.47-33 29.24a39.68 39.68 0 0 0-19.8-7.96 4 4 0 0 0-.88 8A32.1 32.1 0 1 1 132 180v-52.33c0-29 47.45-75.67 76.93-75.67 6.53 0 11.2 1.91 14.26 5.85 9.03 11.61 3.7 38.63-1.95 60.87Z"
}));
var _default = exports.default = Butterfly;