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
const GasPump = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "gas-pump-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m247.8 66.83-19.31-19.32a12 12 0 0 0-17 17l19.34 19.29a4 4 0 0 1 1.17 2.83V166a6 6 0 0 1-12 0v-38a28 28 0 0 0-28-28h-12V56a28 28 0 0 0-28-28H72a28 28 0 0 0-28 28v148H32a12 12 0 0 0 0 24h160a12 12 0 0 0 0-24h-12v-80h12a4 4 0 0 1 4 4v38a30 30 0 0 0 60 0V86.63a27.81 27.81 0 0 0-8.2-19.8ZM68 204V56a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v148Zm72-92a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12Z"
}));
var _default = exports.default = GasPump;