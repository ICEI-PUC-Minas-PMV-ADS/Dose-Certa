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
const Carrot = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "carrot__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 64h-28.69l26.35-26.34a8 8 0 0 0-11.32-11.32L192 52.69V24a8 8 0 0 0-16 0v32.57a64 64 0 0 0-77.2 10.12c-40.1 39.39-70.25 133.08-73.19 142.45a16 16 0 0 0 21.26 21.26c9.37-2.94 103.18-33.13 142.47-73.21A64 64 0 0 0 199.43 80H232a8 8 0 0 0 0-16Zm-54.12 82c-8.94 9.12-21.25 17.8-34.85 25.73l-25.38-25.39a8 8 0 0 0-11.32 11.32l22.09 22.09c-40.87 21.19-86.32 35.42-87 35.63A7.93 7.93 0 0 0 40 216a7.93 7.93 0 0 0 .59-1.41c.29-.93 28-89.58 64-130.67l33.77 33.77a8 8 0 0 0 11.32-11.32l-33.5-33.49a48 48 0 0 1 61.7 73.12Z"
}));
var _default = exports.default = Carrot;