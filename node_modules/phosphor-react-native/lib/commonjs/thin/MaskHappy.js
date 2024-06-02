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
const MaskHappy = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "mask-happy-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M187 125.33a4 4 0 1 1-6 5.33c-3.4-3.8-10.72-6.66-17-6.66s-13.62 2.86-17 6.66a4 4 0 0 1-3 1.34 4 4 0 0 1-3-6.67c4.92-5.5 14.37-9.33 23-9.33s18.06 3.83 23 9.33Zm-78 5.33a4 4 0 1 0 6-5.33c-4.92-5.5-14.37-9.33-23-9.33s-18.06 3.83-23 9.33a4 4 0 0 0 3 6.67 4 4 0 0 0 3-1.34c3.4-3.8 10.72-6.66 17-6.66s13.62 2.86 17 6.66Zm50.3 34.74a40.89 40.89 0 0 1-62.64 0 4 4 0 0 0-6.09 5.2 48.92 48.92 0 0 0 74.82 0 4 4 0 0 0-6.09-5.2ZM220 48v55.78c0 35-9.4 68-26.48 92.92C176.13 222.05 152.86 236 128 236s-48.13-13.95-65.52-39.29C45.4 171.83 36 138.83 36 103.79V48a12 12 0 0 1 16.34-11.2C66.66 42.38 95.53 51.7 128 51.7s61.34-9.32 75.66-14.88A12 12 0 0 1 220 48Zm-8 0a4 4 0 0 0-5.44-3.74C191.72 50 161.77 59.7 128 59.7S64.28 50 49.44 44.27A4.14 4.14 0 0 0 48 44a3.87 3.87 0 0 0-2.23.7A4 4 0 0 0 44 48v55.77C44 172.28 81.68 228 128 228s84-55.72 84-124.21Z"
}));
var _default = exports.default = MaskHappy;