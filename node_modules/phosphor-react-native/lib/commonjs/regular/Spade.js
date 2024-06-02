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
const Spade = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "spade__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M131.58 16.85a8 8 0 0 0-7.16 0C120.32 18.9 24 67.84 24 136a56 56 0 0 0 74.15 53l-9.81 32.7A8 8 0 0 0 96 232h64a8 8 0 0 0 7.66-10.3l-9.81-32.7A56 56 0 0 0 232 136c0-68.16-96.32-117.1-100.42-119.15ZM176 176a40 40 0 0 1-26.29-9.85 8 8 0 0 0-12.92 8.33L149.25 216h-42.5l12.46-41.52a8 8 0 0 0-12.92-8.33A40 40 0 0 1 40 136c0-29.88 24.41-56.55 44.89-73.66A279.13 279.13 0 0 1 128 33.06a279.13 279.13 0 0 1 43.11 29.28c37.1 31 44.89 57.17 44.89 73.66a40 40 0 0 1-40 40Z"
}));
var _default = exports.default = Spade;