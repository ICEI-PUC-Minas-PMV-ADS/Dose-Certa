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
const Syringe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "syringe-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m234.83 69.17-48-48a4 4 0 0 0-5.66 5.66L202.34 48 168 82.34l-37.17-37.17a4 4 0 1 0-5.66 5.66l9.17 9.17-86.83 86.83a12 12 0 0 0-3.51 8.48v51l-22.83 22.86a4 4 0 0 0 5.66 5.66L49.66 212h51a11.93 11.93 0 0 0 8.48-3.51L196 121.66l9.17 9.17a4 4 0 0 0 5.66-5.66L173.66 88 208 53.66l21.17 21.17a4 4 0 1 0 5.66-5.66ZM103.51 202.83a4 4 0 0 1-2.82 1.17H52v-48.69a4 4 0 0 1 1.17-2.82L74 131.66l23.17 23.17a4 4 0 1 0 5.66-5.66L79.66 126 98 107.66l23.17 23.17a4 4 0 0 0 5.66-5.66L103.66 102 140 65.66l25.17 25.17L190.34 116Z"
}));
var _default = exports.default = Syringe;