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
const LightbulbFilament = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lightbulb-filament-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M180 232a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12Zm40-128a92.47 92.47 0 0 1-37 73.73 7.81 7.81 0 0 0-3 6.27 20 20 0 0 1-20 20H96a20 20 0 0 1-20-20v-.23a7.76 7.76 0 0 0-3.25-6.2 91.36 91.36 0 0 1-36.75-73C35.73 54.69 76 13.2 125.79 12A92 92 0 0 1 220 104Zm-24 0a68 68 0 0 0-69.65-68C89.56 36.89 59.8 67.56 60 104.39a67.52 67.52 0 0 0 27.18 54A32.14 32.14 0 0 1 99.77 180H116v-31l-28.49-28.51a12 12 0 0 1 17-17L128 127l23.51-23.51a12 12 0 0 1 17 17L140 149v31h16.25a31.89 31.89 0 0 1 12.41-21.49A67.45 67.45 0 0 0 196 104Z"
}));
var _default = exports.default = LightbulbFilament;