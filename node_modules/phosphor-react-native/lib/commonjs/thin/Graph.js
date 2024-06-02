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
const Graph = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "graph-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 156a27.87 27.87 0 0 0-19.4 7.84l-28.28-22A27.78 27.78 0 0 0 156 128a28.09 28.09 0 0 0-.45-5l19.45-6.45a28.07 28.07 0 1 0-2.53-7.58L153 115.45A28 28 0 0 0 128 100a27.68 27.68 0 0 0-7.6 1.06l-9.5-21.37A28 28 0 1 0 96 84a27.68 27.68 0 0 0 7.6-1.06l9.5 21.37a27.95 27.95 0 0 0-8.46 39.1L74 170.61a28 28 0 1 0 5.32 6l30.6-27.2a27.92 27.92 0 0 0 37.44-1.23l28.28 22A28 28 0 1 0 200 156Zm0-72a20 20 0 1 1-20 20 20 20 0 0 1 20-20ZM76 56a20 20 0 1 1 20 20 20 20 0 0 1-20-20ZM56 212a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm72-64a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm72 56a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z"
}));
var _default = exports.default = Graph;