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
const Pepper = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pepper-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M170.56 36.82A44.08 44.08 0 0 0 128 4a12 12 0 0 0 0 24 20 20 0 0 1 17.09 9.66A68.11 68.11 0 0 0 92 104c0 21.74-5.83 40.14-17.32 54.69-12.22 15.47-31.18 27.08-56.34 34.49a20 20 0 0 0 2.2 38.91 268.22 268.22 0 0 0 46.1 3.91c41.61 0 88-9.38 120.21-36.38C214.16 176.72 228 144.55 228 104a68.11 68.11 0 0 0-57.44-67.18ZM160 60a44 44 0 0 1 40.32 26.41L192 90.58l-26.63-13.32a12 12 0 0 0-10.74 0L128 90.58l-8.32-4.17A44 44 0 0 1 160 60Zm11.43 121.23c-17.4 14.59-42.33 24.47-72.1 28.58a251.28 251.28 0 0 1-58.21.89c46.68-18.51 72.28-52.54 74.68-99.39l6.83 3.42a12.07 12.07 0 0 0 10.74 0L160 101.41l26.63 13.32a12.07 12.07 0 0 0 10.74 0l6.43-3.22c-1.56 29.56-12.42 52.99-32.37 69.72Z"
}));
var _default = exports.default = Pepper;