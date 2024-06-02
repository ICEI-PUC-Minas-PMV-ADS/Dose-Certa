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
const DropHalfBottom = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "drop-half-bottom-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M171 50.37a250.18 250.18 0 0 0-40.73-37.65 4 4 0 0 0-4.58 0A250.18 250.18 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63ZM189.91 188H66.09a75.63 75.63 0 0 1-11.4-24h146.62a75.63 75.63 0 0 1-11.4 24ZM53 156a75.41 75.41 0 0 1-1-12 93.38 93.38 0 0 1 .79-12h150.42a93.38 93.38 0 0 1 .79 12 75.41 75.41 0 0 1-1 12ZM90.9 55.77A254 254 0 0 1 128 21a254 254 0 0 1 37.1 34.81c14.37 16.55 31 40.61 36.77 68.23H54.13c5.8-27.66 22.4-51.72 36.77-68.27ZM128 220a75.77 75.77 0 0 1-55.35-24h110.7A75.77 75.77 0 0 1 128 220Z"
}));
var _default = exports.default = DropHalfBottom;