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
  className: "rainbow-cloud-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 160a48.05 48.05 0 0 1-48 48h-48c-17.65 0-32-14.75-32-32.89s14.35-32.89 32-32.89a31 31 0 0 1 3.34.18A48 48 0 0 1 248 160ZM112 72a87.57 87.57 0 0 1 61.35 24.91 8 8 0 0 0 11.15-11.47A104 104 0 0 0 8 160v16a8 8 0 0 0 16 0v-16a88.1 88.1 0 0 1 88-88Zm0 32a55.58 55.58 0 0 1 33.13 10.84A8 8 0 1 0 154.6 102 72 72 0 0 0 40 160v16a8 8 0 0 0 16 0v-16a56.06 56.06 0 0 1 56-56Zm15.21 26.71a8 8 0 0 0-5.94-9.63A40 40 0 0 0 72 160v16a8 8 0 0 0 16 0v-16a24 24 0 0 1 29.57-23.35 8 8 0 0 0 9.64-5.94Z"
}));
var _default = exports.default = RainbowCloud;