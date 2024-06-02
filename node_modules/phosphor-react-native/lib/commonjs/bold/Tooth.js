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
const Tooth = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tooth-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172.46 83.15 160.31 88l12.15 4.85a12 12 0 1 1-8.92 22.29L128 100.93l-35.54 14.22a12 12 0 0 1-8.92-22.29L95.69 88l-12.15-4.85a12 12 0 0 1 8.92-22.29L128 75.08l35.54-14.22a12 12 0 0 1 8.92 22.29Zm55.54-3.4c.08 76.45-25.2 135.68-49 152.59a20 20 0 0 1-31.44-14.92c-.67-9.06-2.33-22-6.46-32.23C135.76 172 129.92 172 128 172c-7.76 0-11.77 9.92-13.08 13.18-4.13 10.22-5.79 23.17-6.46 32.23A20 20 0 0 1 88.51 236 19.86 19.86 0 0 1 77 232.34C53.2 215.43 27.92 156.2 28 79.75A60 60 0 0 1 88 20h80a60 60 0 0 1 60 59.75Zm-24 0A36 36 0 0 0 168 44H88a36 36 0 0 0-36 35.78c-.06 61.09 17.83 109.52 33.3 127.66C91.24 156 114.32 148 128 148s36.76 8 42.7 59.43c15.47-18.12 33.36-66.55 33.3-127.65Z"
}));
var _default = exports.default = Tooth;