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
  className: "swimming-pool-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M88 145.39a4 4 0 0 0 4-4V124h72v19.29a4 4 0 0 0 8 0V32a4 4 0 0 0-8 0v20H92V32a4 4 0 0 0-8 0v109.39a4 4 0 0 0 4 4ZM92 116V92h72v24Zm72-56v24H92V60ZM28 168a4 4 0 0 1 4-4c13.21 0 20.12 4.61 26.22 8.67 5.9 3.93 11 7.33 21.78 7.33s15.88-3.4 21.78-7.33c6.09-4.06 13-8.67 26.21-8.67s20.13 4.61 26.22 8.67c5.9 3.93 11 7.33 21.79 7.33s15.88-3.4 21.78-7.33c6.1-4.06 13-8.67 26.22-8.67a4 4 0 0 1 0 8c-10.79 0-15.88 3.4-21.78 7.33-6.1 4.06-13 8.67-26.22 8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88 3.4-21.78 7.33c-6.09 4.06-13 8.67-26.21 8.67s-20.12-4.61-26.22-8.67C47.88 175.4 42.79 172 32 172a4 4 0 0 1-4-4Zm200 40a4 4 0 0 1-4 4c-10.79 0-15.88 3.4-21.78 7.33-6.1 4.06-13 8.67-26.22 8.67s-20.13-4.61-26.22-8.67c-5.9-3.93-11-7.33-21.79-7.33s-15.88 3.4-21.78 7.33c-6.09 4.06-13 8.67-26.21 8.67s-20.12-4.61-26.22-8.67C47.88 215.4 42.79 212 32 212a4 4 0 0 1 0-8c13.21 0 20.12 4.61 26.22 8.67 5.9 3.93 11 7.33 21.78 7.33s15.88-3.4 21.78-7.33c6.09-4.06 13-8.67 26.21-8.67s20.13 4.61 26.22 8.67c5.9 3.93 11 7.33 21.79 7.33s15.88-3.4 21.78-7.33c6.1-4.06 13-8.67 26.22-8.67a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = SwimmingPool;