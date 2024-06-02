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
const Flame = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flame-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M170.9 54.24a216.79 216.79 0 0 0-40.84-33.67 4 4 0 0 0-4.12 0A216.79 216.79 0 0 0 85.1 54.24C58.21 82.48 44 113.51 44 144a84 84 0 0 0 168 0c0-30.49-14.21-61.52-41.1-89.76ZM92 184c0-32.11 28.07-53.75 36-59.21 7.93 5.47 36 27.1 36 59.21a36 36 0 0 1-72 0Zm69.94 28A43.82 43.82 0 0 0 172 184c0-41.78-40.23-66.4-41.94-67.43a4 4 0 0 0-4.12 0C124.23 117.6 84 142.22 84 184a43.82 43.82 0 0 0 10.06 28A76.07 76.07 0 0 1 52 144c0-62.48 63.64-107.17 76-115.26 12.36 8.09 76 52.78 76 115.26a76.07 76.07 0 0 1-42.06 68Z"
}));
var _default = exports.default = Flame;