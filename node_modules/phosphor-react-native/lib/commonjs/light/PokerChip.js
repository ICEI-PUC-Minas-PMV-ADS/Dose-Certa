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
  className: "poker-chip-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 152a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50Zm39.37-97.86A61.68 61.68 0 0 0 134 66.3V38.2a89.64 89.64 0 0 1 53.22 22.09ZM122 66.3a61.68 61.68 0 0 0-33.37 13.84L68.78 60.29A89.64 89.64 0 0 1 122 38.2ZM80.14 88.63A61.68 61.68 0 0 0 66.3 122H38.2a89.61 89.61 0 0 1 22.09-53.22ZM66.3 134a61.68 61.68 0 0 0 13.84 33.37l-19.85 19.85A89.61 89.61 0 0 1 38.2 134Zm22.33 41.86A61.68 61.68 0 0 0 122 189.7v28.1a89.64 89.64 0 0 1-53.22-22.09ZM134 189.7a61.68 61.68 0 0 0 33.37-13.84l19.85 19.85A89.64 89.64 0 0 1 134 217.8Zm41.86-22.33A61.68 61.68 0 0 0 189.7 134h28.1a89.61 89.61 0 0 1-22.09 53.22ZM189.7 122a61.68 61.68 0 0 0-13.84-33.37l19.85-19.85A89.61 89.61 0 0 1 217.8 122Z"
}));
var _default = exports.default = PokerChip;