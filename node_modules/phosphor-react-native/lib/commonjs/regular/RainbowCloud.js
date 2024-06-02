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
const RainbowCloud = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rainbow-cloud__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 112a48.18 48.18 0 0 0-44.66 30.4 31 31 0 0 0-3.34-.18c-17.65 0-32 14.76-32 32.89S134.35 208 152 208h48a48 48 0 0 0 0-96Zm0 80h-48c-8.82 0-16-7.58-16-16.89s7.18-16.89 16-16.89a15 15 0 0 1 5.78 1.14 8 8 0 0 0 10.87-5.81A32 32 0 1 1 200 192ZM24 160v16a8 8 0 0 1-16 0v-16a104 104 0 0 1 176.5-74.56 8 8 0 0 1-11.15 11.47A88 88 0 0 0 24 160Zm32 0v16a8 8 0 0 1-16 0v-16a72 72 0 0 1 114.6-58 8 8 0 1 1-9.47 12.89A56 56 0 0 0 56 160Zm61.57-23.35A24 24 0 0 0 88 160v16a8 8 0 0 1-16 0v-16a40 40 0 0 1 49.27-38.92 8 8 0 1 1-3.7 15.57Z"
}));
var _default = exports.default = RainbowCloud;