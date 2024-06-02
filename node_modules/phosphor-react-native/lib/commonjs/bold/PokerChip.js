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
  className: "poker-chip-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 144a36 36 0 1 1 36-36 36 36 0 0 1-36 36Zm33.06-86A59.51 59.51 0 0 0 140 69.21V44.87a83.55 83.55 0 0 1 38.28 15.88ZM116 69.21A59.51 59.51 0 0 0 94.94 78L77.72 60.75A83.55 83.55 0 0 1 116 44.87ZM78 94.94A59.51 59.51 0 0 0 69.21 116H44.87a83.59 83.59 0 0 1 15.88-38.28ZM69.21 140A59.51 59.51 0 0 0 78 161.06l-17.25 17.22A83.59 83.59 0 0 1 44.87 140Zm25.73 38a59.51 59.51 0 0 0 21.06 8.79v24.34a83.55 83.55 0 0 1-38.28-15.88Zm45.06 8.79a59.51 59.51 0 0 0 21.06-8.79l17.22 17.22A83.55 83.55 0 0 1 140 211.13Zm38-25.73a59.51 59.51 0 0 0 8.79-21.06h24.34a83.59 83.59 0 0 1-15.88 38.28Zm8.79-45.06A59.51 59.51 0 0 0 178 94.94l17.22-17.22A83.59 83.59 0 0 1 211.13 116Z"
}));
var _default = exports.default = PokerChip;