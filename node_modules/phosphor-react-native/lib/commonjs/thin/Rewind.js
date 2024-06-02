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
const Rewind = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "rewind-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M221.85 61.48a12 12 0 0 0-12.18.39L124 116.43V71.84a11.66 11.66 0 0 0-6.15-10.36 12 12 0 0 0-12.18.39L17.48 118a11.81 11.81 0 0 0 0 19.94l88.19 56.16a12 12 0 0 0 12.18.39 11.66 11.66 0 0 0 6.15-10.33v-44.59l85.67 54.56a12 12 0 0 0 12.18.39 11.66 11.66 0 0 0 6.15-10.36V71.84a11.66 11.66 0 0 0-6.15-10.36ZM116 184.16a3.76 3.76 0 0 1-2 3.35 3.91 3.91 0 0 1-4-.13l-88.22-56.16a3.8 3.8 0 0 1 0-6.44L110 68.62a3.94 3.94 0 0 1 2.13-.63 4 4 0 0 1 1.91.5 3.76 3.76 0 0 1 2 3.35Zm104 0a3.76 3.76 0 0 1-2 3.35 3.91 3.91 0 0 1-4-.13l-88.18-56.16a3.8 3.8 0 0 1 0-6.44L214 68.62a3.94 3.94 0 0 1 2.13-.63 4 4 0 0 1 1.91.5 3.76 3.76 0 0 1 2 3.35Z"
}));
var _default = exports.default = Rewind;