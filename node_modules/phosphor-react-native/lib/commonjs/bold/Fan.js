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
const Fan = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fan-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236.85 134a64 64 0 0 0-87.43-42.11l14.22-56.77a12 12 0 0 0-5.17-13A64 64 0 0 0 86 127.52l-56.28 16.07a12 12 0 0 0-8.69 11 64 64 0 0 0 127.56 10l42 40.7a12 12 0 0 0 13.86 2 64 64 0 0 0 32.4-73.29ZM116 128a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm8-92a40 40 0 0 1 14 2.53l-13.4 53.64a36 36 0 0 0-25.85 14.88A40 40 0 0 1 124 36Zm-19 156.1A40 40 0 0 1 45.5 164l53.18-15.19a36 36 0 0 0 25.8 15A39.84 39.84 0 0 1 105 192.1Zm104.7-21.56a39.92 39.92 0 0 1-9.21 10.89L160.73 143a35.9 35.9 0 0 0 .05-29.83 40 40 0 0 1 48.89 57.4Z"
}));
var _default = exports.default = Fan;