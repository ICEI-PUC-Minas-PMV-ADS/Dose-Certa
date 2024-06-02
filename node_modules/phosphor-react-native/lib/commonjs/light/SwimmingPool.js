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
const SwimmingPool = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "swimming-pool-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M88 147.39a6 6 0 0 0 6-6V126h68v17.29a6 6 0 0 0 12 0V32a6 6 0 0 0-12 0v18H94V32a6 6 0 0 0-12 0v109.39a6 6 0 0 0 6 6ZM94 114V94h68v20Zm68-52v20H94V62ZM26 168a6 6 0 0 1 6-6c13.82 0 21 4.79 27.33 9 5.63 3.75 10.48 7 20.67 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.32-9s21 4.79 27.33 9c5.63 3.75 10.49 7 20.68 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.33-9a6 6 0 0 1 0 12c-10.18 0-15 3.24-20.67 7-6.34 4.22-13.52 9-27.33 9s-21-4.79-27.33-9c-5.63-3.75-10.49-7-20.68-7s-15 3.24-20.67 7c-6.33 4.22-13.51 9-27.32 9s-21-4.79-27.33-9c-5.67-3.76-10.49-7-20.67-7a6 6 0 0 1-6-6Zm204 40a6 6 0 0 1-6 6c-10.18 0-15 3.24-20.67 7-6.34 4.22-13.52 9-27.33 9s-21-4.79-27.33-9c-5.63-3.75-10.49-7-20.68-7s-15 3.24-20.67 7c-6.33 4.22-13.51 9-27.32 9s-21-4.79-27.33-9c-5.67-3.76-10.49-7-20.67-7a6 6 0 0 1 0-12c13.82 0 21 4.79 27.33 9 5.63 3.75 10.48 7 20.67 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.32-9s21 4.79 27.33 9c5.63 3.75 10.49 7 20.68 7s15-3.24 20.67-7c6.33-4.22 13.51-9 27.33-9a6 6 0 0 1 6 6Z"
}));
var _default = exports.default = SwimmingPool;