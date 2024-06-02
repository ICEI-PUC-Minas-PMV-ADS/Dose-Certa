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
const Cylinder = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cylinder-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M179.14 24.08C165.28 16.29 147.12 12 128 12s-37.28 4.29-51.14 12.08C60.83 33.1 52 45.86 52 60v136c0 14.14 8.83 26.9 24.86 35.92C90.72 239.71 108.88 244 128 244s37.28-4.29 51.14-12.08c16-9 24.86-21.78 24.86-35.92V60c0-14.14-8.83-26.9-24.86-35.92ZM88.63 45c10.17-5.72 24.52-9 39.37-9s29.2 3.28 39.37 9c8 4.52 12.63 10 12.63 15s-4.6 10.48-12.63 15c-10.17 5.72-24.52 9-39.37 9s-29.2-3.28-39.37-9C80.6 70.48 76 65 76 60s4.6-10.48 12.63-15Zm78.74 166c-10.17 5.72-24.52 9-39.37 9s-29.2-3.28-39.37-9C80.6 206.48 76 201 76 196V95.4l.86.52C90.72 103.71 108.88 108 128 108s37.28-4.29 51.14-12.08l.86-.52V196c0 5-4.6 10.48-12.63 15Z"
}));
var _default = exports.default = Cylinder;