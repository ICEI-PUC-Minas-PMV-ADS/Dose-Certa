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
const Cake = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cake-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228 112a20 20 0 0 0-20-20h-76V75.71A28 28 0 0 0 156 48c0-25.84-24.73-42.63-25.78-43.33a4 4 0 0 0-4.44 0C124.73 5.37 100 22.16 100 48a28 28 0 0 0 24 27.71V92H48a20 20 0 0 0-20 20v23.33a36.85 36.85 0 0 0 8 22.91V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-41.76a36.85 36.85 0 0 0 8-22.91ZM108 48c0-17.39 14.37-30.53 20-35 5.63 4.48 20 17.62 20 35a20 20 0 0 1-40 0Zm92 164H56a12 12 0 0 1-12-12v-34.27A35.16 35.16 0 0 0 63 172a36.13 36.13 0 0 0 33-19.48 36 36 0 0 0 64 0A36.13 36.13 0 0 0 192 172h1a35.16 35.16 0 0 0 19-6.26V200a12 12 0 0 1-12 12Zm20-76.67c0 15.39-12.21 28.25-27.21 28.66A28 28 0 0 1 164 136a4 4 0 0 0-8 0 28 28 0 0 1-56 0 4 4 0 0 0-8 0 28 28 0 0 1-28.79 28c-15-.41-27.21-13.27-27.21-28.66V112a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Z"
}));
var _default = exports.default = Cake;