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
const DribbbleLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "dribbble-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm91.92 96.43C216 124.15 212 124 208 124a164.4 164.4 0 0 0-46.55 6.74A163.48 163.48 0 0 0 146.61 97c-.49-.82-1-1.64-1.5-2.46a164 164 0 0 0 43.39-35.79 91.8 91.8 0 0 1 31.42 65.68Zm-37.67-70.68a156.23 156.23 0 0 1-41.46 34.08 165 165 0 0 0-46.3-45.51 91.86 91.86 0 0 1 87.76 11.43Zm-96.47-7.47a157 157 0 0 1 47.9 45.34A155.67 155.67 0 0 1 64 108a157.47 157.47 0 0 1-25.33-2 92.35 92.35 0 0 1 47.11-59.72ZM36 128a92.34 92.34 0 0 1 1.1-14.2A165.6 165.6 0 0 0 64 116a163.6 163.6 0 0 0 74.05-17.62c.55.9 1.11 1.79 1.64 2.7a155.15 155.15 0 0 1 14.14 32.11 162.7 162.7 0 0 0-27.59 12.61A164.94 164.94 0 0 0 70 199.36 91.84 91.84 0 0 1 36 128Zm40.44 76.16a157.08 157.08 0 0 1 53.8-51.43A153.87 153.87 0 0 1 156 140.91a156.32 156.32 0 0 1 4.9 38.78 157 157 0 0 1-4.11 35.69 91.94 91.94 0 0 1-80.37-11.22Zm89.3 7.74a165.24 165.24 0 0 0 3.18-32.21 164.26 164.26 0 0 0-5.28-41.26A156.44 156.44 0 0 1 208 132c4 0 7.94.15 11.88.45a92.17 92.17 0 0 1-54.14 79.45Z"
}));
var _default = exports.default = DribbbleLogo;