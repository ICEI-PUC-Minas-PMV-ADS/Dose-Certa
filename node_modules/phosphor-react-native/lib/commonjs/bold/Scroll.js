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
const Scroll = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "scroll-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M92 92a12 12 0 0 1 12-12h60a12 12 0 0 1 0 24h-60a12 12 0 0 1-12-12Zm12 52h60a12 12 0 0 0 0-24h-60a12 12 0 0 0 0 24Zm132 48a36 36 0 0 1-36 36H88a36 36 0 0 1-36-36V64a12 12 0 0 0-24 0c0 3.73 3.35 6.51 3.38 6.54l-.18-.14a12 12 0 1 1-14.39 19.19C15.49 88.62 4 79.55 4 64a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v100h4a12 12 0 0 1 7.2 2.4c1.31.98 12.8 10.05 12.8 25.6ZM92.62 172.2A12 12 0 0 1 104 164h84V64a12 12 0 0 0-12-12H73.94A35.88 35.88 0 0 1 76 64v128a12 12 0 0 0 24 0c0-3.58-3.17-6.38-3.2-6.4a12 12 0 0 1-4.18-13.4ZM212 192a7.69 7.69 0 0 0-1.24-4h-87a30.32 30.32 0 0 1 .26 4 35.84 35.84 0 0 1-2.06 12H200a12 12 0 0 0 12-12Z"
}));
var _default = exports.default = Scroll;