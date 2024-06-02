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
const Palette = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "palette-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M198 56.74A99.31 99.31 0 0 0 128 28h-1a100 100 0 0 0-99 100c0 41.22 25.55 75.85 66.69 90.38a28.34 28.34 0 0 0 9.42 1.63A28 28 0 0 0 132 192a20 20 0 0 1 20-20h46.21a27.84 27.84 0 0 0 27.3-21.76 100.37 100.37 0 0 0 2.49-23.1 99.26 99.26 0 0 0-30-70.4Zm19.74 91.72A19.89 19.89 0 0 1 198.21 164H152a28 28 0 0 0-28 28 20 20 0 0 1-26.64 18.83C59.51 197.46 36 165.72 36 128a92 92 0 0 1 91.05-92h.95a92 92 0 0 1 89.72 112.46ZM136 76a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-44 24a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm0 56a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm88-56a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z"
}));
var _default = exports.default = Palette;