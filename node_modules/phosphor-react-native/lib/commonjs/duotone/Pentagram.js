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
const Pentagram = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pentagram-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m228.69 102.47-54.21 39 20.77 64a8 8 0 0 1-12.31 8.95L128 174.91l-54.94 39.53a8 8 0 0 1-12.31-8.95l20.77-64-54.21-39A8 8 0 0 1 32 88h66.87l21.52-66.32a7.94 7.94 0 0 1 15.22 0L157.13 88H224a8 8 0 0 1 4.69 14.47Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M239.2 91.06A15.76 15.76 0 0 0 224 80h-61l-19.7-60.74a15.94 15.94 0 0 0-30.46-.05L93.06 80H32a16 16 0 0 0-9.38 29l49.47 35.59L53.14 203A15.77 15.77 0 0 0 59 220.91a15.77 15.77 0 0 0 18.78 0L128 184.77l50.24 36.14A16 16 0 0 0 202.86 203l-19-58.46 49.5-35.62a15.76 15.76 0 0 0 5.84-17.86ZM128 24.15 146.12 80h-36.24ZM32 96h55.87L77.3 128.58Zm36.36 112 17.39-53.59 28.55 20.54Zm22.57-69.57L104.69 96h46.62l13.76 42.39L128 165.06ZM187.64 208l-45.91-33 28.55-20.54Zm-8.94-79.38L168.13 96H224Z"
}));
var _default = exports.default = Pentagram;