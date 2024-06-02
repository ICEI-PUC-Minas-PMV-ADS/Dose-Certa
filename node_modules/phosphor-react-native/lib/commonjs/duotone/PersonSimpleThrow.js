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
  className: "person-simple-throw-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M152 56a24 24 0 1 1-24-24 24 24 0 0 1 24 24Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 88a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16ZM48 96a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm174.24 14.61a8 8 0 0 1-11.24 1.26c-1.15-.89-23.71-17.7-59.32.61a214.93 214.93 0 0 1-3 30.35l32.43 27a8 8 0 0 1 2.47 8.68l-16 48a8 8 0 0 1-15.18-5.06l14.27-42.82-22.08-18.4a141.86 141.86 0 0 1-5.1 14.33c-13.75 32.74-38.38 54.63-73.2 65.08a8 8 0 0 1-4.6-15.32c60.68-18.21 71.14-72.22 73.42-101.65C108 139.88 86.57 144 72.36 144a59.59 59.59 0 0 1-19.67-3.27A8 8 0 0 1 56 125.4a7.82 7.82 0 0 1 3.31.73s26.76 10.68 72.19-20.2c52.29-35.54 88-7.77 89.51-6.57a8 8 0 0 1 1.23 11.25Z"
}));
var _default = exports.default = PersonSimpleThrow;