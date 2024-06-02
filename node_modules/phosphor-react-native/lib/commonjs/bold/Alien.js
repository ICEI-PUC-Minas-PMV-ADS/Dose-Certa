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
const Alien = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "alien-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 12A100.11 100.11 0 0 0 28 112c0 24.86 12.86 56.8 34.41 85.44C70.63 208.36 99.64 244 128 244s57.37-35.64 65.59-46.56C215.14 168.8 228 136.86 228 112A100.11 100.11 0 0 0 128 12Zm46.41 171c-13.83 18.38-34.21 37-46.41 37s-32.58-18.61-46.41-37C63.34 158.75 52 131.54 52 112a76 76 0 0 1 152 0c0 19.54-11.34 46.75-29.59 71ZM104 148a36 36 0 0 1-36-36 12 12 0 0 1 12-12 36 36 0 0 1 36 36 12 12 0 0 1-12 12Zm84-36a36 36 0 0 1-36 36 12 12 0 0 1-12-12 36 36 0 0 1 36-36 12 12 0 0 1 12 12Zm-36 72a12 12 0 0 1-12 12h-24a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12Z"
}));
var _default = exports.default = Alien;