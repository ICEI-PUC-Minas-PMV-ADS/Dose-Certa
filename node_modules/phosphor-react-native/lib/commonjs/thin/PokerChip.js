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
  className: "poker-chip-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 152a52 52 0 1 1 52-52 52.06 52.06 0 0 1-52 52Zm39.47-97.13A59.7 59.7 0 0 0 132 68.15V36.09a91.64 91.64 0 0 1 58.13 24.12ZM124 68.15a59.7 59.7 0 0 0-35.47 14.72L65.87 60.21A91.64 91.64 0 0 1 124 36.09ZM82.87 88.53A59.7 59.7 0 0 0 68.15 124H36.09a91.64 91.64 0 0 1 24.12-58.13ZM68.15 132a59.7 59.7 0 0 0 14.72 35.47l-22.66 22.66A91.64 91.64 0 0 1 36.09 132Zm20.38 41.13A59.7 59.7 0 0 0 124 187.85v32.06a91.64 91.64 0 0 1-58.13-24.12ZM132 187.85a59.7 59.7 0 0 0 35.47-14.72l22.66 22.66A91.64 91.64 0 0 1 132 219.91Zm41.13-20.38A59.7 59.7 0 0 0 187.85 132h32.06a91.64 91.64 0 0 1-24.12 58.13ZM187.85 124a59.7 59.7 0 0 0-14.72-35.47l22.66-22.66A91.64 91.64 0 0 1 219.91 124Z"
}));
var _default = exports.default = PokerChip;