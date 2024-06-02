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
const Horse = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "horse__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M136 100a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm96 29.48A104.29 104.29 0 0 1 130.1 232h-2.17a103.32 103.32 0 0 1-69.26-26 8 8 0 1 1 10.67-12 84.71 84.71 0 0 0 20.1 13.37L116 170.84c-22.78-9.83-47.47-5.65-61.4-3.29a31.84 31.84 0 0 1-31.3-12.83l-.3-.43-13.78-22a8 8 0 0 1 2.59-11.05L112 59.53V32a8 8 0 0 1 8-8h8a104 104 0 0 1 104 105.48Zm-16-.22A88 88 0 0 0 128 40v24a8 8 0 0 1-3.81 6.81l-97.13 59.78 9.36 15A15.92 15.92 0 0 0 52 151.77c16-2.7 48.77-8.24 78.07 8.18A40.06 40.06 0 0 0 168 120a8 8 0 0 1 16 0 56.07 56.07 0 0 1-51.8 55.83l-27.11 37.28a90.89 90.89 0 0 0 24.69 2.89A88.29 88.29 0 0 0 216 129.26Z"
}));
var _default = exports.default = Horse;