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
const HandsPraying = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hands-praying-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m233.9 181.42-36.59-36.6L160.71 24A19.75 19.75 0 0 0 128 15.62 19.75 19.75 0 0 0 95.29 24l-36.6 120.82-36.59 36.6a14 14 0 0 0 0 19.79l32.69 32.69a14 14 0 0 0 19.79 0l48.29-48.28a38 38 0 0 0 5.13-6.38 38 38 0 0 0 5.13 6.38l48.29 48.28a14 14 0 0 0 19.79 0l32.69-32.69a14 14 0 0 0 0-19.79Zm-167.8 44a2 2 0 0 1-2.83 0l-32.69-32.69a2 2 0 0 1 0-2.83l14.11-14.1 35.51 35.51Zm48.28-48.29-25.69 25.7-35.52-35.52 15.07-15.07a6 6 0 0 0 1.5-2.5l37-122.22A7.78 7.78 0 0 1 122 29.78v129a25.83 25.83 0 0 1-7.62 18.35ZM134 158.75v-129a7.78 7.78 0 0 1 15.22-2.26l37 122.22a6 6 0 0 0 1.5 2.5l15.93 15.94-36.28 34.74-25.79-25.79a25.83 25.83 0 0 1-7.58-18.35Zm91.42 34-32.69 32.69a2 2 0 0 1-2.83 0l-14-14 36.29-34.74 13.24 13.23a2 2 0 0 1-.01 2.8Z"
}));
var _default = exports.default = HandsPraying;