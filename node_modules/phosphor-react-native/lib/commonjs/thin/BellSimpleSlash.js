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
const BellSimpleSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bell-simple-slash-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M71.75 60.18 51 37.31a4 4 0 0 0-6 5.38l18.8 20.63A75.52 75.52 0 0 0 52 104c0 36.13-8.58 64-14.36 73.95A12 12 0 0 0 48 196h136.41L205 218.69a4 4 0 1 0 5.92-5.38ZM48 188a3.89 3.89 0 0 1-3.43-2 4 4 0 0 1 0-4C52 169.17 60 139.32 60 104a67.58 67.58 0 0 1 9.4-34.51L177.14 188Zm116 36a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm48.53-48.48a3.94 3.94 0 0 1-1.46.28 4 4 0 0 1-3.72-2.54C200.24 155.17 196 129.28 196 104A68 68 0 0 0 94.46 44.83a4 4 0 1 1-4-6.95A76 76 0 0 1 204 104c0 36.05 8.26 59.89 10.79 66.34a4 4 0 0 1-2.26 5.18Z"
}));
var _default = exports.default = BellSimpleSlash;