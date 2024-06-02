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
const SunHorizon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sun-horizon-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 148h-36.11c.07-1.33.11-2.66.11-4a76 76 0 0 0-152 0c0 1.34 0 2.67.11 4H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24Zm-164-4a52 52 0 0 1 104 0c0 1.34-.07 2.67-.17 4H76.17c-.1-1.33-.17-2.66-.17-4Zm144 56a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h160a12 12 0 0 1 12 12ZM12.62 92.21a12 12 0 0 1 15.17-7.59l12 4a12 12 0 1 1-7.58 22.77l-12-4a12 12 0 0 1-7.59-15.18Zm56-48.41a12 12 0 1 1 22.76-7.59l4 12a12 12 0 1 1-22.76 7.59Zm140 60a12 12 0 0 1 7.59-15.18l12-4a12 12 0 0 1 7.58 22.77l-12 4a12 12 0 0 1-15.17-7.59Zm-48-55.59 4-12a12 12 0 1 1 22.76 7.59l-4 12a12 12 0 1 1-22.76-7.59Z"
}));
var _default = exports.default = SunHorizon;