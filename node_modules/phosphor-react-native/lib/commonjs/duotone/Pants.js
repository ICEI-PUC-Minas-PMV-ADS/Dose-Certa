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
const Pants = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pants-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M202.05 104H200a40 40 0 0 1-40-40H96a40 40 0 0 1-40 40h-2l8.06-65A8 8 0 0 1 70 32h116a8 8 0 0 1 7.94 7Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m223.88 214-22-176A16 16 0 0 0 186 24H70a16 16 0 0 0-15.88 14l-22 176A16 16 0 0 0 48 232h40.69a16 16 0 0 0 15.51-12.06l23.8-92 23.79 91.94A16 16 0 0 0 167.31 232H208a16 16 0 0 0 15.88-18ZM192.9 95.2A32.13 32.13 0 0 1 169 72h21ZM186 40l2 16H68l2-16ZM66 72h21a32.13 32.13 0 0 1-23.9 23.2Zm22.69 144H48l13-104.27A48.08 48.08 0 0 0 103.32 72H120v23Zm78.6-.06L136 95V72h16.68A48.08 48.08 0 0 0 195 111.73L208 216Z"
}));
var _default = exports.default = Pants;