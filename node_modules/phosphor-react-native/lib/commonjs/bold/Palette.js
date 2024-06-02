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
  className: "palette-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M203.57 51A107.9 107.9 0 0 0 20 128c0 44.72 27.6 82.25 72 97.94A36 36 0 0 0 140 192a12 12 0 0 1 12-12h46.21a35.79 35.79 0 0 0 35.1-28 108.6 108.6 0 0 0 2.69-24.91A107.23 107.23 0 0 0 203.57 51Zm6.34 95.67a11.91 11.91 0 0 1-11.7 9.3H152a36 36 0 0 0-36 36 12 12 0 0 1-16 11.3c-16.65-5.88-30.65-15.76-40.48-28.56A76 76 0 0 1 44 128a84 84 0 0 1 83.13-84h.87a84.35 84.35 0 0 1 84 83.29 84.72 84.72 0 0 1-2.09 19.42ZM144 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-44 24a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm0 56a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm88-56a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z"
}));
var _default = exports.default = Palette;