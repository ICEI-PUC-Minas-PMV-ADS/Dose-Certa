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
const Scales = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "scales-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m243.14 131.54-32-80a12 12 0 0 0-13.73-7.25L140 57V40a12 12 0 0 0-24 0v22.37L53.4 76.29a12 12 0 0 0-8.54 7.25l-32 79.92A12 12 0 0 0 12 168c0 12.13 6.2 22.43 17.45 29A55 55 0 0 0 56 204a55 55 0 0 0 26.55-7C93.8 190.43 100 180.13 100 168a12 12 0 0 0-.86-4.46L72.38 96.65 116 87v117h-12a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24h-12V81.63l40.42-9-23.56 58.9A12 12 0 0 0 156 136c0 12.13 6.2 22.43 17.45 29a53.78 53.78 0 0 0 53.1 0c11.25-6.57 17.45-16.87 17.45-29a12 12 0 0 0-.86-4.46ZM56 180c-3.71 0-18-1.87-19.81-10.18L56 120.31l19.81 49.51C74 178.13 59.71 180 56 180Zm144-32c-3.71 0-18-1.87-19.81-10.18L200 88.31l19.81 49.51C218 146.13 203.71 148 200 148Z"
}));
var _default = exports.default = Scales;