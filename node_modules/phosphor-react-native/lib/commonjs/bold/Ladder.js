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
const Ladder = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "ladder-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.27 211.9 168.77 73l7.63-21h7.6a12 12 0 0 0 0-24H88a12 12 0 0 0-1.11 23.94l-58.16 160a12 12 0 0 0 7.17 15.37 11.83 11.83 0 0 0 4.1.69 12 12 0 0 0 11.28-7.9L60 196h38.5l-5.78 15.9a12 12 0 0 0 7.18 15.37 11.79 11.79 0 0 0 4.1.73 12 12 0 0 0 11.28-7.9l17.49-48.1h46.46l17.49 48.1A12 12 0 0 0 208 228a11.83 11.83 0 0 0 4.1-.73 12 12 0 0 0 7.17-15.37ZM124.69 124H86.22L95 100h38.46Zm17.45-48h-38.46l8.73-24h38.46Zm-73.37 96 8.73-24H116l-8.73 24Zm72.73-24 14.5-39.89L170.5 148Z"
}));
var _default = exports.default = Ladder;