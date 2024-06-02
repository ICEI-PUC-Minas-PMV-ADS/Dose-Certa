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
const NumberZero = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "number-zero-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M186.62 61.05c-13.76-21.62-34-33-58.62-33s-44.86 11.38-58.62 33C58.17 78.66 52 102.44 52 128s6.17 49.33 17.38 66.94C83.14 216.57 103.41 228 128 228s44.86-11.43 58.62-33.06C197.83 177.33 204 153.56 204 128s-6.17-49.34-17.38-66.95Zm-20.25 121C157.11 196.62 144.2 204 128 204s-29.11-7.38-38.37-21.94C80.84 168.25 76 149.05 76 128s4.84-40.25 13.63-54.06C98.89 59.38 111.8 52 128 52s29.11 7.38 38.37 21.94C175.16 87.75 180 107 180 128s-4.84 40.25-13.63 54.06Z"
}));
var _default = exports.default = NumberZero;