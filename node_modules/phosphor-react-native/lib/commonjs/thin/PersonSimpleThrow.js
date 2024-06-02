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
const PersonSimpleThrow = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-throw-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 84a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-48a20 20 0 1 1-20 20 20 20 0 0 1 20-20ZM52 96a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm167.12 12.1a4 4 0 0 1-5.62.62c-1.2-.94-26.41-20.11-65.7 1.3v.84a210.61 210.61 0 0 1-3.43 33.54l34.23 28.53a4 4 0 0 1 1.23 4.33l-16 48A4 4 0 0 1 160 228a3.92 3.92 0 0 1-1.26-.21 4 4 0 0 1-2.53-5.06l15.13-45.41-29-24.13a138.23 138.23 0 0 1-6.53 19.81c-13.26 31.58-37 52.71-70.66 62.8a3.82 3.82 0 0 1-1.15.2 4 4 0 0 1-1.15-7.83c69.32-20.8 75.54-86.09 76.74-113.21l-1.34.9C109.24 135.58 86.78 140 72.42 140c-11.24 0-17.51-2.73-18.08-3a4 4 0 1 1 3.32-7.28c.25.11 28.44 11.87 76.09-20.52 25.89-17.6 47.41-18.6 60.91-16.34 14.86 2.48 23.48 9.29 23.84 9.58a4 4 0 0 1 .62 5.66Z"
}));
var _default = exports.default = PersonSimpleThrow;