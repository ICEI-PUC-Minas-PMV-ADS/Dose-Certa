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
const PokerChip = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "poker-chip-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 32a96 96 0 1 0 96 96 96 96 0 0 0-96-96Zm0 152a56 56 0 1 1 56-56 56 56 0 0 1-56 56Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 152a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48Zm39.21-98.53a63.66 63.66 0 0 0-31.21-13v-24.1a87.6 87.6 0 0 1 48.28 20ZM120 64.52a63.66 63.66 0 0 0-31.21 13L71.72 60.4a87.6 87.6 0 0 1 48.28-20ZM77.47 88.79a63.66 63.66 0 0 0-13 31.21h-24.1a87.6 87.6 0 0 1 20-48.28ZM64.52 136a63.66 63.66 0 0 0 13 31.21L60.4 184.28a87.6 87.6 0 0 1-20-48.28Zm24.27 42.53A63.66 63.66 0 0 0 120 191.48v24.15a87.6 87.6 0 0 1-48.28-20ZM136 191.48a63.66 63.66 0 0 0 31.21-12.95l17.07 17.07a87.6 87.6 0 0 1-48.28 20Zm42.53-24.27A63.66 63.66 0 0 0 191.48 136h24.15a87.6 87.6 0 0 1-20 48.28ZM191.48 120a63.66 63.66 0 0 0-12.95-31.21l17.07-17.07a87.6 87.6 0 0 1 20 48.28Z"
}));
var _default = exports.default = PokerChip;