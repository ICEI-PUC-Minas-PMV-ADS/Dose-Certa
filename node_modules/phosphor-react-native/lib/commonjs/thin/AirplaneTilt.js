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
const AirplaneTilt = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "airplane-tilt-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m180.67 113.1 31.05-29.23.09-.08a28 28 0 0 0-39.6-39.6l-.08.09-29.23 31.05-85.53-31.1a4 4 0 0 0-4.2.93l-24 24a4 4 0 0 0 .61 6.16l68 45.29L78.35 140H56a4 4 0 0 0-2.83 1.18l-24 24a4 4 0 0 0 1.34 6.54l38.42 15.36 15.34 38.37v.09a4 4 0 0 0 6.59 1.23l23.93-23.93A4 4 0 0 0 116 200v-22.35l19.38-19.38 45.29 67.95a4 4 0 0 0 6.16.61l24-24a4 4 0 0 0 .93-4.2Zm4 104.62-45.29-67.94a4 4 0 0 0-2.98-1.78h-.39a4 4 0 0 0-2.83 1.18l-24 24A4 4 0 0 0 108 176v22.34l-18.53 18.54-13.75-34.37a4 4 0 0 0-2.23-2.23l-34.37-13.75L57.66 148H80a4 4 0 0 0 2.83-1.17l24-24a4 4 0 0 0-.61-6.16l-67.94-45.3L57 52.62l85.61 31.13a4 4 0 0 0 4.28-1l31-32.93a20 20 0 0 1 28.31 28.27l-32.93 31a4 4 0 0 0-1 4.28L203.38 199Z"
}));
var _default = exports.default = AirplaneTilt;