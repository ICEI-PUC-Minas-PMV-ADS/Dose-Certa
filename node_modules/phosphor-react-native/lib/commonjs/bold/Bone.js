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
const Bone = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bone-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M234.74 58.31a39.89 39.89 0 0 0-23.35-13.7 40 40 0 1 0-74.86 25.87l-66 66.05a40 40 0 1 0-25.87 74.86 40 40 0 1 0 74.86-25.86l66.05-66.06a40 40 0 0 0 49.22-61.16Zm-18.64 36.2a16 16 0 0 1-20.54 3 20 20 0 0 0-24.84 2.76l-70.4 70.4a20 20 0 0 0-2.75 24.84 16 16 0 1 1-29.41 6A12 12 0 0 0 56.3 187.7a11.61 11.61 0 0 0-1.85.14 16 16 0 1 1 6-29.4 20 20 0 0 0 24.83-2.76l70.4-70.4a20 20 0 0 0 2.76-24.84 16 16 0 1 1 29.4-6 12 12 0 0 0 13.71 13.71 16 16 0 0 1 14.55 26.36Z"
}));
var _default = exports.default = Bone;