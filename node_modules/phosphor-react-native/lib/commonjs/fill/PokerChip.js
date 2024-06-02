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
  className: "poker-chip-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM60.4 71.72l17.07 17.07a63.66 63.66 0 0 0-13 31.21h-24.1A87.6 87.6 0 0 1 60.4 71.72ZM40.37 136h24.15a63.66 63.66 0 0 0 13 31.21L60.4 184.28A87.6 87.6 0 0 1 40.37 136ZM120 215.63a87.6 87.6 0 0 1-48.28-20l17.07-17.07A63.66 63.66 0 0 0 120 191.48Zm0-151.11a63.66 63.66 0 0 0-31.21 13L71.72 60.4a87.6 87.6 0 0 1 48.28-20ZM215.63 120h-24.15a63.66 63.66 0 0 0-12.95-31.21l17.07-17.07A87.6 87.6 0 0 1 215.63 120ZM136 40.37a87.6 87.6 0 0 1 48.28 20l-17.07 17.1a63.66 63.66 0 0 0-31.21-13Zm0 175.26v-24.15a63.66 63.66 0 0 0 31.21-12.95l17.07 17.07A87.6 87.6 0 0 1 136 215.63Zm59.6-31.35-17.07-17.07A63.66 63.66 0 0 0 191.48 136h24.15a87.6 87.6 0 0 1-20.03 48.28Z"
}));
var _default = exports.default = PokerChip;