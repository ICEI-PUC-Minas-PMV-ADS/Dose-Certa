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
  className: "rainbow-cloud-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M204 108a52.23 52.23 0 0 0-47.23 30.23H156c-19.85 0-36 16.55-36 36.89S136.15 212 156 212h48a52 52 0 0 0 0-104Zm0 80h-48c-6.62 0-12-5.78-12-12.89s5.38-12.89 12-12.89a11 11 0 0 1 4.26.84 12 12 0 0 0 16.31-8.71A28 28 0 1 1 204 188Zm-94.78-51.16a12 12 0 0 1-2.12 16.83A8 8 0 0 0 104 160v16a12 12 0 0 1-24 0v-16a31.8 31.8 0 0 1 12.38-25.28 12 12 0 0 1 16.84 2.12Zm27.44-18A48 48 0 0 0 64 160v16a12 12 0 0 1-24 0v-16a72 72 0 0 1 109-61.77 12 12 0 0 1-12.35 20.58ZM24 160v16a12 12 0 0 1-24 0v-16a112 112 0 0 1 185.47-84.54 12 12 0 0 1-15.75 18.11A88 88 0 0 0 24 160Z"
}));
var _default = exports.default = RainbowCloud;