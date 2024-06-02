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
const Broadcast = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "broadcast-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 92a36 36 0 1 0 36 36 36 36 0 0 0-36-36Zm0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm76-28a75.74 75.74 0 0 1-19.35 50.67 4 4 0 0 1-6-5.34 67.92 67.92 0 0 0 0-90.66 4 4 0 0 1 6-5.34A75.74 75.74 0 0 1 204 128ZM65.34 101.53a67.92 67.92 0 0 0 12 71.8 4 4 0 0 1-6 5.34 75.93 75.93 0 0 1 0-101.34 4 4 0 1 1 6 5.34 68 68 0 0 0-12 18.86ZM244 128a115.68 115.68 0 0 1-33.14 81.18 4 4 0 0 1-5.72-5.6 107.89 107.89 0 0 0 0-151.16 4 4 0 0 1 5.72-5.6A115.68 115.68 0 0 1 244 128ZM50.86 203.58a4 4 0 0 1-5.72 5.6 115.91 115.91 0 0 1 0-162.36 4 4 0 1 1 5.72 5.6 107.89 107.89 0 0 0 0 151.16Z"
}));
var _default = exports.default = Broadcast;