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
const Balloon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "balloon-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M137.89 199.13 152 232h-48l14.09-32.87C78.59 192.18 48 144.83 48 104a80 80 0 0 1 160 0c0 40.83-30.59 88.18-70.11 95.13Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 16a88.1 88.1 0 0 0-88 88c0 23.43 9.4 49.42 25.13 69.5 12.08 15.41 26.5 26 41.91 31.09l-10.39 24.26A8 8 0 0 0 104 240h48a8 8 0 0 0 7.35-11.15L149 204.59c15.4-5.07 29.83-15.68 41.91-31.09C206.6 153.42 216 127.43 216 104a88.1 88.1 0 0 0-88-88Zm11.87 208h-23.74l6.94-16.19c1.64.12 3.28.19 4.93.19s3.29-.07 4.93-.19Zm38.4-60.37C163.94 181.93 146.09 192 128 192s-35.94-10.07-50.27-28.37C64.12 146.27 56 124 56 104a72 72 0 0 1 144 0c0 20-8.12 42.27-21.73 59.63Zm-1-59.74a8.52 8.52 0 0 1-1.27.11 8 8 0 0 1-7.88-6.68 41.29 41.29 0 0 0-33.43-33.43 8 8 0 1 1 2.64-15.78 57.5 57.5 0 0 1 46.57 46.57 8 8 0 0 1-6.58 9.21Z"
}));
var _default = exports.default = Balloon;