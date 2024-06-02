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
const WarningOctagon = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "warning-octagon-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M116 132V80a12 12 0 0 1 24 0v52a12 12 0 0 1-24 0Zm120-40.45v72.9a19.86 19.86 0 0 1-5.86 14.14l-51.55 51.55a19.85 19.85 0 0 1-14.14 5.86h-72.9a19.85 19.85 0 0 1-14.14-5.86l-51.55-51.55A19.86 19.86 0 0 1 20 164.45v-72.9a19.86 19.86 0 0 1 5.86-14.14l51.55-51.55A19.85 19.85 0 0 1 91.55 20h72.9a19.85 19.85 0 0 1 14.14 5.86l51.55 51.55A19.86 19.86 0 0 1 236 91.55Zm-24 1.66L162.79 44H93.21L44 93.21v69.58L93.21 212h69.58L212 162.79ZM128 156a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z"
}));
var _default = exports.default = WarningOctagon;