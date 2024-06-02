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
const FlowerTulip = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "flower-tulip-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 44a91.55 91.55 0 0 0-33.77 6.42c-15.8-24.4-39.72-36.58-40.86-37.15a12 12 0 0 0-10.74 0c-1.14.57-25.06 12.75-40.86 37.15A91.55 91.55 0 0 0 48 44a12 12 0 0 0-12 12v40a92.14 92.14 0 0 0 80 91.22v25.36l-30.63-15.31a12 12 0 0 0-10.74 21.46l48 24a12 12 0 0 0 10.74 0l48-24a12 12 0 1 0-10.74-21.46L140 212.58v-25.36A92.14 92.14 0 0 0 220 96V56a12 12 0 0 0-12-12Zm-80-6.06c6.37 4.16 17.13 12.31 25.21 24.2A92.63 92.63 0 0 0 128 90.61a92.76 92.76 0 0 0-25.21-28.47c8.08-11.89 18.84-20.04 25.21-24.2ZM60 96V69.06A68.11 68.11 0 0 1 116 136v26.94A68.12 68.12 0 0 1 60 96Zm136 0a68.12 68.12 0 0 1-56 66.94V136a68.11 68.11 0 0 1 56-66.94Z"
}));
var _default = exports.default = FlowerTulip;